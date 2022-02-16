const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KT1RpDlrgUOB4VtvkOJJlhzOGDkwWbrTIcmwsQFxBNTnLsm6hc2gWKUpEZ2F3Lzcv2LwZ6cBbWRVJRaGN3QMhEV00rQd6xR8B');

// Setup steps : API => 
const app = express()

// Middlerwares => 
app.use(cors({origin:true}));

// App routes => 
app.use(express.json());

// Listen command =>
app.get('/', (request, response) => response.status(200).send('HOllE World MOOOO'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request recieved => total is : ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
      });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/challenge-93b0a/us-central1/api