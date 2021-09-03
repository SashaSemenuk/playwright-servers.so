const {chromium, webkit, firefox, devices} = require('playwright');


(async () => {

    const browserServer = await firefox.launchServer({
        port: 3000,
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