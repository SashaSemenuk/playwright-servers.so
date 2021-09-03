const {chromium} = require('playwright');

(async () => {

    const browserServer = await chromium.launchServer({
        port: 3002,
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