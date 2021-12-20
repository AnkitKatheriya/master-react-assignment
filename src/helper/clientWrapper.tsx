import client from '../services/client'

enum RequestMethods {
    GET='GET',
    POST='POST',
    PUT='PUT',
    DELETE='DELETE',
}

interface ICustomConfig {
    method: RequestMethods.GET | RequestMethods.POST | RequestMethods.PUT | RequestMethods.DELETE,
    headers?: HeadersInit,
}

const get = (url:string, requestOptions?: { headers: HeadersInit }) => {
    const customConfig: ICustomConfig = {
        method: RequestMethods.GET,
        ...requestOptions,
    }

    return client(url, customConfig)
}

const post = (url: string, body: BodyInit, requestOptions?: { headers: HeadersInit }) => {
    const customConfig = {
        method: RequestMethods.POST,
        ...requestOptions,
    }

    return client(url, customConfig, body)
}

const _delete = (url:string, body: BodyInit, requestOptions?: { headers: HeadersInit }) => {
    const customConfig = {
        method: RequestMethods.PUT,
        ...requestOptions,
    }

    return client(url, customConfig, body)
}

export default {
    get,
    post,
    delete: _delete
}