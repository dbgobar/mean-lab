var express = require("express");
var hbs     = require("express-handlebars");
var mongoose     = require("./db/schema");
var bodyParser  = require("body-parser")
var app     = express();

var Sundae = mongoose.model("Sundae");

// app.use(express.static(__dirname + '/public'))
// app.use(bodyParser.json()); //handles json post requests
app.use(bodyParser.json({ extended: true }));
app.use("/assets", express.static("public"));


app.set("view engine", "hbs"); //set this as handlebars for the view
app.set("port", process.env.PORT || 4000); // added a port and changed localhost # to 4000
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout"
}));

app.get("/", function(req, res){
        res.render("sundaes");
})

app.get("/api/", function(req, res){
  Sundae.find({}).then(function(sundaes){
      res.json(sundaes);
  })
})

app.get("/api/:flavor", function(req,res){
  Sundae.findOne({flavor: req.params.flavor}).then(sundae => {
    res.json(sundae);
  })
})

app.post("/api/", function(req, res){
  Sundae.create(req.body).then(sundae =>{
    res.redirect("/");
  })
})

app.post("/:flavor/delete", function(req, res){
  Sundae.findOneAndRemove({flavor: req.params.flavor}).then(sundae =>{
    res.redirect("/");
  })
})

app.post("/:flavor", function(req, res){
  Sundae.findOneAndUpdate({flavor: req.params.flavor}, req.body.sundae, {new: true}).then(sundae =>{
    res.redirect("/");
  })
})


app.listen(app.get("port"), () =>{
  console.log("blah")
})
