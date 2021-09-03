const {chromium } = require('playwright');
const {CHROMIUM_PORT, PROXY, SERVER_TIMEOUT} = require("../helpers/constans");


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