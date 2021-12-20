interface IRequestConfig {
    headers?: HeadersInit
}

interface IRequestBody {
    body?: BodyInit
}

type configType = IRequestConfig & IRequestBody

const client = async (endpoint: string, customConfig: IRequestConfig, body?: BodyInit  ) => {
    const headers = {"Content-type": "application/json; charset=UTF-8"}

    const config: configType = {
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers
        },
    }

    if(body){
        config.body = JSON.stringify(body)
    }

    return fetch(endpoint, config).then(async(res) => {
        if(res.status === 500){
            return Promise.reject(new Error('Internal Server Error'))
        }
        if(res.ok){
            return Promise.resolve(await res.json())
        }

        return Promise.reject(new Error(await res.json()))
    })
}

export default client 