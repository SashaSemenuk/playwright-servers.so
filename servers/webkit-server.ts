const {webkit} = require('playwright');

(async () => {

    const browserServer = await webkit.launchServer({
        port: process.env.WEBKIT_PORT,
        headless: true,
        proxy: {
            server: 'http://zproxy.lum-superproxy.io:22225',
            username: 'lum-customer-c_d85763aa-zone-static',
            password: 'vkwo3qj4iniu'
        },
    });

    const wsEndpoint = browserServer.wsEndpoint();
    console.log(wsEndpoint)

})().catch(async (e) => {
    console.log(e);
});