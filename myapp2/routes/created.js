const express = require('express'),
    router = express.Router(),
    BigCommerce = require('node-bigcommerce');

const bigCommerce = new BigCommerce({
    clientId: '55slx6nm2x8kdui03fcgi3ypx1307jd',
    secret: '66f97f0580c570076559be61c632139df6f02b637d7ed2b34483dc4f8cad21e9',
    callback: 'https://6977-46-211-105-31.ngrok.io/hooks',
    responseType: 'json'
});
var app = express();
const client = require('twilio')("AC39fb4e9bf305cd77c587a3fbe8d9efd7", "71YNuF0NMdIeDnfMxkLJApISdI0svMgb");

router.get('/', (req, res, next) => {
    try {
        // const title = {"bigCommerce.verify(req.query['signed_payload'])"};
        // console.log(title);
        // bigCommerce.get('/hooks')
        //     .then(data => {
        //         let webhooks = data;
        //         let scopes = webhooks.map(a => a.scope);
        //         const hookBody = {
        //             "scope": "store/customer/created",
        //             "destination": "https://6977-46-211-105-31.ngrok.io/webhooks",
        //             "is_active": true
        //         }
        //
        //         console.log(scopes);
        //         if (scopes.indexOf("store/customer/created") > -1 || scopes.indexOf("store/customer/*") > -1) {
        //             console.log("Customer webhook already exists");
        //         } else {
        //             bigCommerce.post('/hooks', hookBody)
        //                 .then(data => {
        //                     console.log('Customer webhook created');
        //                 })
        //         }
        //     });
        // when there's a post request to /webhooks...
        app.post('/webhooks', function (req, res) {
            console.log('webhooks 2000 OKKKK');
            // respond with 200 OK
            res.send('OK');
        });
        // app.post('/webhooks', function (req, res) {
        //     res.send('OK');
        //     let webhook = req.body;
        //     let customerId = webhook.data.id;
        //     //console.log(webhook);
        //     console.log(customerId);
        //
        //     bigCommerce.get(`/customers/${customerId}`)
        //         .then(data => {
        //             let firstName = data.first_name;
        //             let lastName = data.last_name;
        //             sendText(firstName, lastName);
        //         })
        // });
        // function sendText(firstName, lastName){
        //     client.messages
        //         .create({
        //             body: `${firstName} ${lastName} just registered an account on your store!`,
        //             from: '+15127777777',
        //             to: '+15125555555'
        //         })
        //         .then(message => console.log(message.sid));
        // }
        res.render('created')
    } catch (err) {
        next(err);
    }
});

module.exports = router;