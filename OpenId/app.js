const express = require('express');
const app = express();
const stringReplace = require('string-replace-middleware');

const KC_URL = process.env.KC_URL || "http://localhost:8080"
//"https://kube-dev-eus.connex.baxter.com/";
const SERVICE_URL = process.env.SERVICE_URL || "http://localhost:7071/graphql";

app.use(stringReplace({
    'SERVICE_URL': SERVICE_URL,
    'KC_URL': KC_URL
}));
app.use(express.static('.'))

app.get('/', function(req, res) {
    res.render('index.html');
});


app.listen(8001);