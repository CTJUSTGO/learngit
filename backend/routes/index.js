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
  var id = req.query.id;
  https.get('https://mainsite-restapi.ele.me/shopping/restaurant/' + id + '?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&latitude=22.533012&longitude=113.930475', function(response) {
    var data = '';    
    response.on('data', function (chunk) {
      data += chunk;
    });  
    response.on('end', function () {     
        res.send(data);
    })
  })

});

router.get('/shop/tab1',function(req,res,next){
  var id=req.query.id;
  https.get('https://mainsite-restapi.ele.me/shopping/v2/menu?restaurant_id='+id,function(response){
    var data = ''
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data);
    })
  })
});

router.get('/ratings/tags',function(req,res,next){
  var id = req.query.id;
  https.get('https://mainsite-restapi.ele.me/ugc/v2/restaurants/'+id+'/ratings/tags',function(response){
    var data = ''
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data);
    })
  })
});

router.get('/ratings',function(req,res,next){
  var id = req.query.id;
  var str = encodeURIComponent(req.query.str);
  https.get('https://mainsite-restapi.ele.me/ugc/v2/restaurants/'+id+'/ratings?has_content=true&tag_name='+str+'&offset=0&limit=10',function(response){
    var data = ''
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data);
    })
  })
});


router.get('/find/gift', function(req, res, next) {
  https.get('https://mainsite-restapi.ele.me/member/gifts/suggest', function(response) {
    var data = ''
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data);
    })
  })

})
router.get('/find/sale', function(req, res, next) {
  https.get('https://mainsite-restapi.ele.me/hotfood/v1/guess/likes?latitude=22.54286&longitude=114.059563&offset=0&limit=3&request_id=b81f3022-2dfe-40f1-9283-8d30d6da03be&tag_id=-1&columns=1', function(response) {
    var data = ''
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data);
    })
  })

})
router.get('/filter/kinds',function(req,res,next){
  https.get('https://mainsite-restapi.ele.me/shopping/v2/restaurant/category?latitude=22.54286&longitude=114.059563',function(response){
    var data = ''
    response.on('data',function(chunk){
      data +=chunk;
    })
    response.on('end',function(){
      res.send(data);
    })
  })
})
module.exports = router;
