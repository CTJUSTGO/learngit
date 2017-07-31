var express = require('express');
var router = express.Router();
var https = require('https');

router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weather', function(req, res, next) {

  https.get('https://mainsite-restapi.ele.me/bgs/weather/current?latitude=22.533012&longitude=113.930475', function(response) {
    var data = ''
    response.on('data', function (chunk) {
      data += chunk;
    })

    response.on('end', function () {
      res.send(data);
    })
  })

});

router.get('/hotsearch', function(req, res, next) {

  https.get('https://restapi.ele.me/shopping/v3/hot_search_words?latitude=22.533012&longitude=113.930475', function(response) {
    var data = ''
    response.on('data', function (chunk) {
      data += chunk;
    })

    response.on('end', function () {
      res.send(data);
    })
  })

});

router.get('/place', function(req, res, next) {

  https.get('https://restapi.ele.me/bgs/poi/reverse_geo_coding?latitude=22.533012&longitude=113.930475', function(response) {
    var data = ''
    response.on('data', function (chunk) {
      data += chunk;
    })

    response.on('end', function () {
      res.send(data);
    })
  })

});

router.get('/banner', function(req, res, next) {

  https.get('https://mainsite-restapi.ele.me/shopping/v2/entries?latitude=22.533012&longitude=113.930475&templates[]=main_template', function(response) {
    var data = ''
    response.on('data', function (chunk) {
      data += chunk;
    })

    response.on('end', function () {
      res.send(data);
    })
  })

});

router.get('/homeproductslist', function(req, res, next) {

  var offset = req.query.offset;
  https.get('https://mainsite-restapi.ele.me/shopping/restaurants?latitude=22.533012&longitude=113.930475&offset='+offset+'&limit=20&extras[]=activities&terminal=h5', function(response) {
    var data = ''
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data);
    })
  })

});

router.get('/shop/header', function(req, res, next) {
  https.get('https://mainsite-restapi.ele.me/shopping/restaurant/155170084', function(response) {
    var data = ''
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data);
    })
  })

})

module.exports = router;
