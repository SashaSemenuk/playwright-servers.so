let {SERVER_TIMEOUT, FIREFOX_PORT, PROXY} = require("../helpers/constans");
const {firefox} = require("playwright");
const express = require('express');
const app = express();
app.use(express.json());

(async () => {

    const browserServer = await firefox.launchServer({
        port: FIREFOX_PORT,
        headless: true,
        proxy: PROXY,
        timeout: SERVER_TIMEOUT,
    });

    const wsEndpoint = browserServer.wsEndpoint();

    app.get('/firefox', (req, res) => {
        res.send({text: wsEndpoint});
    });
    console.log(wsEndpoint);

    app.listen(9090);

})().catch(async (e) => {
    console.log(e);
});