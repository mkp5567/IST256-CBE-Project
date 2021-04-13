var axios = require('axios').default;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    axios.get('http://www.recipepuppy.com/api/?i=tomato,salt&q=pasta&q=pizzacrust&q=garlic&p=3').then(function(response){
        res.send(response.data);
    });
});

router.get('/', function(req, res, next){
    axios.get('http://www.recipepuppy.com/api/?i=meat,butter&q=steak').then(function(response){
        res.send(response.data);
    });
});

router.get('/', function(req, res, next){
    axios.get('http://www.recipepuppy.com/api/?i=fish,lemon&q=salmon').then(function(response){
        res.send(response.data);
    });
});


module.exports = router;