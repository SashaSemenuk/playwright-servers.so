const {webkit} = require('playwright');
const {WEBKIT_PORT, PROXY, SERVER_TIMEOUT} = require("../helpers/constans");


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