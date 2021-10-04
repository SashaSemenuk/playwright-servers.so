require('dotenv').config()
const {PROXY_URL, PROXY_USERNAME, PROXY_PASS} = process.env

const
    WEBKIT_PORT = 3001,
    CHROMIUM_PORT = 3002,

    PROXY = {
        server: PROXY_URL,
        username: PROXY_USERNAME,
        password: PROXY_PASS
    },

    SERVER_TIMEOUT = 1200000


module.exports = {
    WEBKIT_PORT,
    CHROMIUM_PORT,
    PROXY,
    SERVER_TIMEOUT
}

