var express = require("express");
var router = express.Router();
//var burger = require("../models/burger.js");

var db = require("../models");
var mysql = require('mysql');

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	db.Burger.findAll({}).then(function(data) {
		console.log(data);
		res.render('burgers/index', {burgers: data});
	});
});



router.post("/create", function(req, res){
	// res.send(req.body);
    
   console.log(req.body.bname)
   db.Burger.create(req.body).then(function() {
        console.log("created a burger")
            res.redirect( '/');
            //res.send(req.body);
    }).catch(function(err) {
        console.log(err);
        res.json(err);
    }); 
/*	db.Burger.create(['bname','devoured'], [req.body.bname,0], function(response){
		//res.redirect('/');
	});*/
})


router.put("/delete/:id", function(req, res) {
  var condition = "id = " + req.params.id;

 db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.redirect('/');
  });
});
/*
router.get('/delete/:noteid', function(req, res) {
  db.Fieldnote.destroy({
    where: {
      id: req.params.noteid
    }
  }).then(function() {
    res.redirect('/notes/viewall');
  });
});
*/
// Export routes for server.js to use.
module.exports = router;










