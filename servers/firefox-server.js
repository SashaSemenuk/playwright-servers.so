const {PROXY_URL, PROXY_USERNAME, PROXY_PASS} = process.env
const { SERVER_TIMEOUT, FIREFOX_PORT} = require("../helpers/constans");
const {firefox} = require("playwright");


(async () => {

    const browserServer = await firefox.launchServer({
        port: FIREFOX_PORT,
        headless: true,
        proxy: {
            server: 'http://zproxy.lum-superproxy.io:22225',
            username: PROXY_USERNAME,
            password: PROXY_PASS
        },
        timeout: SERVER_TIMEOUT,
    });

    const wsEndpoint = browserServer.wsEndpoint();
    console.log(wsEndpoint)

})().catch(async (e) => {
    console.log(e);
});