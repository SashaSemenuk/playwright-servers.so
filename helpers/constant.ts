const { PROXY_URL, PROXY_USERNAME, PROXY_PASS } = process.env;

export const
    FIREFOX_PORT: number = 3000,
    WEBKIT_PORT: number = 3001,
    CHROMIUM_PORT: number = 3002,

    SERVER_TIMEOUT:number = 1200000,

    PROXY: object = {
        server: PROXY_URL,
        username: PROXY_USERNAME,
        password: PROXY_PASS
    }

