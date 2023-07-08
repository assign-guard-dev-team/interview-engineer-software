/* tslint:disable */
/* eslint-disable */
/**
 * User Item Management
 * User Item Management API
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorModel } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { UserRead } from '../models';
// @ts-ignore
import { UserUpdate } from '../models';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Users
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers: async (skip?: number, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (skip !== undefined) {
                localVarQueryParameter['skip'] = skip;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Users:Current User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersCurrentUser: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/users/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Users:Delete User
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersDeleteUser: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('usersDeleteUser', 'id', id)
            const localVarPath = `/api/v1/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Users:Patch Current User
         * @param {UserUpdate} userUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPatchCurrentUser: async (userUpdate: UserUpdate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userUpdate' is not null or undefined
            assertParamExists('usersPatchCurrentUser', 'userUpdate', userUpdate)
            const localVarPath = `/api/v1/users/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(userUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Users:Patch User
         * @param {string} id 
         * @param {UserUpdate} userUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPatchUser: async (id: string, userUpdate: UserUpdate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('usersPatchUser', 'id', id)
            // verify required parameter 'userUpdate' is not null or undefined
            assertParamExists('usersPatchUser', 'userUpdate', userUpdate)
            const localVarPath = `/api/v1/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(userUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Users:User
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersUser: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('usersUser', 'id', id)
            const localVarPath = `/api/v1/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get Users
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUsers(skip?: number, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UserRead>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUsers(skip, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Users:Current User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersCurrentUser(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserRead>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersCurrentUser(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Users:Delete User
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersDeleteUser(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersDeleteUser(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Users:Patch Current User
         * @param {UserUpdate} userUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersPatchCurrentUser(userUpdate: UserUpdate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserRead>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersPatchCurrentUser(userUpdate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Users:Patch User
         * @param {string} id 
         * @param {UserUpdate} userUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersPatchUser(id: string, userUpdate: UserUpdate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserRead>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersPatchUser(id, userUpdate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Users:User
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersUser(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserRead>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersUser(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * 
         * @summary Get Users
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers(skip?: number, limit?: number, options?: any): AxiosPromise<Array<UserRead>> {
            return localVarFp.getUsers(skip, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Users:Current User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersCurrentUser(options?: any): AxiosPromise<UserRead> {
            return localVarFp.usersCurrentUser(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Users:Delete User
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersDeleteUser(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.usersDeleteUser(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Users:Patch Current User
         * @param {UserUpdate} userUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPatchCurrentUser(userUpdate: UserUpdate, options?: any): AxiosPromise<UserRead> {
            return localVarFp.usersPatchCurrentUser(userUpdate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Users:Patch User
         * @param {string} id 
         * @param {UserUpdate} userUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPatchUser(id: string, userUpdate: UserUpdate, options?: any): AxiosPromise<UserRead> {
            return localVarFp.usersPatchUser(id, userUpdate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Users:User
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersUser(id: string, options?: any): AxiosPromise<UserRead> {
            return localVarFp.usersUser(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getUsers operation in UsersApi.
 * @export
 * @interface UsersApiGetUsersRequest
 */
export interface UsersApiGetUsersRequest {
    /**
     * 
     * @type {number}
     * @memberof UsersApiGetUsers
     */
    readonly skip?: number

    /**
     * 
     * @type {number}
     * @memberof UsersApiGetUsers
     */
    readonly limit?: number
}

/**
 * Request parameters for usersDeleteUser operation in UsersApi.
 * @export
 * @interface UsersApiUsersDeleteUserRequest
 */
export interface UsersApiUsersDeleteUserRequest {
    /**
     * 
     * @type {string}
     * @memberof UsersApiUsersDeleteUser
     */
    readonly id: string
}

/**
 * Request parameters for usersPatchCurrentUser operation in UsersApi.
 * @export
 * @interface UsersApiUsersPatchCurrentUserRequest
 */
export interface UsersApiUsersPatchCurrentUserRequest {
    /**
     * 
     * @type {UserUpdate}
     * @memberof UsersApiUsersPatchCurrentUser
     */
    readonly userUpdate: UserUpdate
}

/**
 * Request parameters for usersPatchUser operation in UsersApi.
 * @export
 * @interface UsersApiUsersPatchUserRequest
 */
export interface UsersApiUsersPatchUserRequest {
    /**
     * 
     * @type {string}
     * @memberof UsersApiUsersPatchUser
     */
    readonly id: string

    /**
     * 
     * @type {UserUpdate}
     * @memberof UsersApiUsersPatchUser
     */
    readonly userUpdate: UserUpdate
}

/**
 * Request parameters for usersUser operation in UsersApi.
 * @export
 * @interface UsersApiUsersUserRequest
 */
export interface UsersApiUsersUserRequest {
    /**
     * 
     * @type {string}
     * @memberof UsersApiUsersUser
     */
    readonly id: string
}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * 
     * @summary Get Users
     * @param {UsersApiGetUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUsers(requestParameters: UsersApiGetUsersRequest = {}, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).getUsers(requestParameters.skip, requestParameters.limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Users:Current User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersCurrentUser(options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).usersCurrentUser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Users:Delete User
     * @param {UsersApiUsersDeleteUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersDeleteUser(requestParameters: UsersApiUsersDeleteUserRequest, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).usersDeleteUser(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Users:Patch Current User
     * @param {UsersApiUsersPatchCurrentUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersPatchCurrentUser(requestParameters: UsersApiUsersPatchCurrentUserRequest, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).usersPatchCurrentUser(requestParameters.userUpdate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Users:Patch User
     * @param {UsersApiUsersPatchUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersPatchUser(requestParameters: UsersApiUsersPatchUserRequest, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).usersPatchUser(requestParameters.id, requestParameters.userUpdate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Users:User
     * @param {UsersApiUsersUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersUser(requestParameters: UsersApiUsersUserRequest, options?: AxiosRequestConfig) {
        return UsersApiFp(this.configuration).usersUser(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }
}