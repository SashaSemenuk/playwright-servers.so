const {PROXY_URL, PROXY_USERNAME, PROXY_PASS} = process.env
const {chromium } = require('playwright');
const {CHROMIUM_PORT, SERVER_TIMEOUT} = require("../helpers/constans");


(async () => {

    const browserServer = await chromium.launchServer({
        port: CHROMIUM_PORT,
        headless: true,
        proxy: {
            server: PROXY_URL,
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