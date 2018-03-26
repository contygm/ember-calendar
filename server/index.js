const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');

// TODO: passport, server-side authentication
// TODO: capacity for mulitple users
//
var app = express();
 app
  .use(express.static(__dirname + '/dist'))
  .use(bodyParser.urlencoded({ extended: true}))
  .use(bodyParser.json({ type: 'application/vnd.api+json' }))
  .use('/api', api)
  .post('/token', (req, res) => {
    if (req.body.username === 'hello' && req.body.password) {
      res.send({ access_token: 'accessToken'});
    } else {
      res.status(400).send({ error: 'invalid_grant'});
    }
  })
  .get('*', (req, res) => res.sendFile(__dirname + '/dist/index.html'))
  .listen(4300, function () {
    console.log('server is live');
  })
