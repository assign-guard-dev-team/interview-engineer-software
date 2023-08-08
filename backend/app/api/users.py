from typing import Any, List

from fastapi.params import Depends
from fastapi.routing import APIRouter
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio.session import AsyncSession
from starlette.responses import Response

from app.core.logger import logger
from app.deps.db import get_async_session
from app.deps.users import current_superuser
from app.models.user import User
from app.schemas.user import UserRead

import requests

router = APIRouter()


@router.get("/users", response_model=List[UserRead])
async def get_users(
    response: Response,
    session: AsyncSession = Depends(get_async_session),
    user: User = Depends(current_superuser),
    skip: int = 0,
    limit: int = 100,
) -> Any:
    logger.info("Fetching users")
    total = await session.scalar(select(func.count(User.id)))
    users = (
        (await session.execute(select(User).offset(skip).limit(limit))).scalars().all()
    )
    response.headers["Content-Range"] = f"{skip}-{skip + len(users)}/{total}"
    return users

@router.get("/users/valid", response_model=List[UserRead])
async def get_valid_users(
    response: Response,
    session: AsyncSession = Depends(get_async_session),
    user: User = Depends(current_superuser),
    skip: int = 0,
    limit: int = 100,
) -> Any:
    logger.info("Fetching valid users")
    total = await session.scalar(select(func.count(User.id)))
    users = (
        (await session.execute(select(User).offset(skip).limit(limit))).scalars().all()
    )
    valid_users = list(filter(is_user_valid, users))
    response.headers["Content-Range"] = f"{skip}-{skip + len(valid_users)}/{total}"
    return valid_users


def is_user_valid(user: User):
    """Helper function that checks if a user is valid via their email domain
    """
    domain = user.email.split("@")[1]
    
    try:
        response = requests.get(f"http://{domain}")
        return response.status_code == 200
    except requests.exceptions.ConnectionError:
        return False
