const express = require('express'),
    router = express.Router(),
    BigCommerce = require('node-bigcommerce');

const bigCommerce = new BigCommerce({
    clientId: '55slx6nm2x8kdui03fcgi3ypx1307jd',
    secret: '66f97f0580c570076559be61c632139df6f02b637d7ed2b34483dc4f8cad21e9',
    callback: 'https://6977-46-211-105-31.ngrok.io/auth',
    responseType: 'json'
});

router.get('/', (req, res, next) => {
    bigCommerce.authorize(req.query)
        .then(data => console.log(data))
        .then(data => res.render('auth', { title: 'Authorized!' })
            .catch(err));
});
module.exports = router;