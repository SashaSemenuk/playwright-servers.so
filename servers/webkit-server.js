require('dotenv').config();
const {WEBKIT_SERVER_PORT, WEBKIT_BROWSER_PORT} = process.env;
const {webkit} = require("playwright");
const express = require('express');
const server = express();
server.use(express.json());

(async () => {

    const browserServer = await webkit.launchServer({
        headless: true,
        port: +WEBKIT_SERVER_PORT,
        proxy: {server: 'per-context'},
    });

    const wsEndpoint = browserServer.wsEndpoint();

    server.get('/api/browserWsEndpoint', (req, res) => {
        res.send({status: 'ok', browserWSEndpoint: wsEndpoint});
    });
    server.listen(WEBKIT_BROWSER_PORT, (error) => {
        if (error) {
            console.log(error);
        }
        console.log(`Server has been started on port ${WEBKIT_BROWSER_PORT} ...`);
    });

})().catch(async (e) => {
    console.log(e);
});