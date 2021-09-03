const {CHROMIUM_PORT, SERVER_TIMEOUT, PROXY} = require("../helpers/constans");
const {chromium } = require('playwright');

(async () => {

    const browserServer = await chromium.launchServer({
        port: CHROMIUM_PORT,
        headless: true,
        proxy: PROXY,
        timeout: SERVER_TIMEOUT,
    });

    const wsEndpoint = browserServer.wsEndpoint();
    console.log(wsEndpoint)

})().catch(async (e) => {
    console.log(e);
});