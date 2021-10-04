require('dotenv').config();
const {FIREFOX_SERVER_PORT, FIREFOX_BROWSER_PORT} = process.env;
const {firefox} = require("playwright");
const express = require('express');
const server = express();
server.use(express.json());

(async () => {

    const browserServer = await firefox.launchServer({
        headless: false,
        port: +FIREFOX_BROWSER_PORT,
        proxy: {server: 'per-context'},
    });

    const wsEndpoint = browserServer.wsEndpoint();

    server.get('/api/browserWsEndpoint', (req, res) => {
        res.send({status: 'ok', browserWSEndpoint: wsEndpoint});
    });
    server.listen(FIREFOX_SERVER_PORT, (error) => {
        if (error) {
            console.log(error);
        }
        console.log(`Server has been started on port ${FIREFOX_SERVER_PORT} ...`);
    });

})().catch(async (e) => {
    console.log(e);
});