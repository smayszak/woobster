var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('patributes', { title: 'Woobster.org' });
});

module.exports = router;
