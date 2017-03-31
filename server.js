var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT||8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//
app.get("/", function(req, res){
	// res.send(req.body);

	
		res.redirect('/burgers');
	
})
// Import routes and give the server access to them.
var burger_routes = require("./controllers/burgers_controller.js");
app.use("/burgers", burger_routes);

app.listen(port, function(){
	console.log('listening on port ' + port)
});
