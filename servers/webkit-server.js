
const {SERVER_TIMEOUT, WEBKIT_PORT, PROXY} = require("../helpers/constans");
const {webkit} = require('playwright');
const express = require('express');
const app = express();
app.use(express.json());

(async () => {

    const browserServer = await webkit.launchServer({
        port: WEBKIT_PORT,
        headless: true,
        proxy: PROXY,
        timeout: SERVER_TIMEOUT,
    });

    const wsEndpoint = browserServer.wsEndpoint();

    app.get('/webkit', (req, res) => {
        res.send({text: wsEndpoint});
    });

    console.log(wsEndpoint);

    app.listen(9091);

})().catch(async (e) => {
    console.log(e);
});