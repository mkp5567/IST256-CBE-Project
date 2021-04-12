var axios = require('axios').default;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    axios.get('http://www.recipepuppy.com/api/?i=potato,salt&q=fries&p=3').then(function(response){
        res.send(response.data);
    });
})

module.exports = router;