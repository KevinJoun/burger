var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get('/',function(req,res){
    burger.selectAll(function(data){
        var object = {
            burgers: data
        };
        console.log(object)
        res.render("index",object);
    })
})

router.put('/burgers/:id', function(req,res){
    burger.updateOne(req.params.id, function(data){
        res.sendStatus(200)
    })
})

router.post('/burgers/create',function(req,res){
    burger.insertOne(req.body.burgerName, function(data){
        res.redirect('/')
    })
})

module.exports = router;