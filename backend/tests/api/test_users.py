from httpx import AsyncClient

from app.core.config import settings
from app.models.user import User

from tests.utils import get_jwt_header

class TestGetValidUsers:
    async def test_get_valid_users_not_logged_in(self, client: AsyncClient):
        resp = await client.get(settings.API_PATH + "/users/valid")
        assert resp.status_code == 401

    async def test_get_valid_users_with_unauthorized_user(self, client: AsyncClient, create_user):
        """ Test that an unauthorized user cannot access the endpoint
        """
        user: User = await create_user()
        jwt_header = get_jwt_header(user)
        resp = await client.get(settings.API_PATH + "/users/valid", headers=jwt_header)
        assert resp.status_code == 403