
var express = require('express');
var app = express();

var api_routes = require("./api_routes.js");


app.set('view engine', 'ejs');
app.use('/api', api_routes);
app.use('/assets', express.static('assets'))

app.get('/home',(req,res) =>{
  res.render('homepage');
});

app.listen(3000, function(){
  console.log("Server Running");
})
