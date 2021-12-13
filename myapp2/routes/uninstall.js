const express = require('express'),
    router = express.Router(),
    BigCommerce = require('node-bigcommerce');
const bigCommerce = new BigCommerce({
    secret: '66f97f0580c570076559be61c632139df6f02b637d7ed2b34483dc4f8cad21e9',
    responseType: 'json'
});

router.get('/', (req, next) => {
    try {
        const data = bigCommerce.verify(req.query['signed_payload']);
        console.log(data);
    } catch (err) {
        next(err);
    }
});

module.exports = router;