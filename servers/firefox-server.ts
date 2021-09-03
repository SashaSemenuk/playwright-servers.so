import {FIREFOX_PORT, PROXY, SERVER_TIMEOUT} from "../helpers/constant";
const {firefox} = require('playwright');


(async () => {

    const browserServer = await firefox.launchServer({
        port: FIREFOX_PORT,
        headless: true,
        proxy: PROXY,
        timeout: SERVER_TIMEOUT

    });

    const wsEndpoint = browserServer.wsEndpoint();
    console.log(wsEndpoint)

})().catch(async (e) => {
    console.log(e);
});