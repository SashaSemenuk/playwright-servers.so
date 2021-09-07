const {CHROMIUM_PORT, SERVER_TIMEOUT, PROXY} = require("../helpers/constans");
const {chromium } = require('playwright');
const express = require('express');
const app = express();
app.use(express.json());

(async () => {

    const browserServer = await chromium.launchServer({
        port: CHROMIUM_PORT,
        headless: true,
        proxy: PROXY,
        timeout: SERVER_TIMEOUT,
    });

    const wsEndpoint = browserServer.wsEndpoint();
    app.get('/chromium', (req, res) => {
        res.send({text: wsEndpoint});
    });
    console.log(wsEndpoint);

    app.listen(9090);

})().catch(async (e) => {
    console.log(e);
});