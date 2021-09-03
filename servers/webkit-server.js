
const {PROXY, SERVER_TIMEOUT, WEBKIT_PORT} = require("../helpers/constans");
const {webkit} = require('playwright');

(async () => {

    const browserServer = await webkit.launchServer({
        port: WEBKIT_PORT,
        headless: true,
        proxy: PROXY,
        timeout: SERVER_TIMEOUT,
    });

    const wsEndpoint = browserServer.wsEndpoint();
    console.log(wsEndpoint)

})().catch(async (e) => {
    console.log(e);
});