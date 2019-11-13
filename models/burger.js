var orm = require('../config/orm.js');

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },
    insertOne: function(vals,cb){
        orm.insertOne("burgers",["burger_name", "devoured"] ,[vals, false], function(res){
            cb(res)
        })
    },
    updateOne: function(id, cb){
    var condition = "id=" + id;
    orm.updateOne("burgers", {devoured: true}, condition, cb);
    }
}

module.exports = burger;