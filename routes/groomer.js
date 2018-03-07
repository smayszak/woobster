var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('groomer', { title: 'Woobster.org', pAttributes: {"a":"b"} });
});

router.post('/', function(req, res, next) {
  var petSettings = req.body;
  res.render('groomer', { title: 'Woobster.org', pAttributes: petSettings });
});

module.exports = router;
