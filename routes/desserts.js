var axios = require('axios').default;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    axios.get('http://www.recipepuppy.com/api/?i=icecream,chocolate&q=milkshake').then(function(response){
        res.send(response.data);
    });
});
router.get('/1', function(req, res, next){
    axios.get('http://www.recipepuppy.com/api/?i=sugar&q=cookie').then(function(response){
      res.send(response.data);
  });
});
router.get('/2', function(req, res, next){
  axios.get('http://www.recipepuppy.com/api/?i=milk&q=icecream').then(function(response){
    res.send(response.data);
});
});

module.exports = router;