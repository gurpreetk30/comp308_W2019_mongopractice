let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', (req, res, next) =>  {
  res.render('index', { title: 'About' });
});

router.get('/contact', (req, res, next) =>  {
  res.render('index', { title: 'Favourite things' });
});

router.get('/products', (req, res, next) =>  {
  res.render('index', { title: 'Products' });
});

router.get('/services', (req, res, next) =>  {
  res.render('index', { title: 'Services' });
});

module.exports = router;
