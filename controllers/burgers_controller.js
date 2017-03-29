var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	burger.all(function(data){
		console.log(data);
		res.render('burgers/index', {burgers: data});
	});
});



router.post("/create", function(req, res){
	// res.send(req.body);
    
    
    
	burger.create(['bname'], [req.body.bname], function(response){
		res.redirect('/');
	});
})


router.put("/delete/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;










