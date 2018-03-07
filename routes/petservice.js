var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render({ data: 'payload' });
});
*/
router.get('/', function(req, res) {
  var settings = req.body;
  res.json(settings)
 /* request('https://jsonplaceholder.typicode.com/users', function(error, response, body) {
      res.json(body)
  });*/
});

module.exports = router;



