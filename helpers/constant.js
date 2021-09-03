const {PROXY_URL, PROXY_USERNAME, PROXY_PASS} = process.env;


const
    FIREFOX_PORT = 3000,
    WEBKIT_PORT = 3001,
    CHROMIUM_PORT = 3002,

    SERVER_TIMEOUT = 1200000,

    PROXY = {
        server: PROXY_URL,
        username: PROXY_USERNAME,
        password: PROXY_PASS
    }

module.exports = {
    FIREFOX_PORT,
    WEBKIT_PORT,
    CHROMIUM_PORT,
    SERVER_TIMEOUT,
    PROXY
}

