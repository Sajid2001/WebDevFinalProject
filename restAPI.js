
var express = require('express');
var app = express();
const port = process.env.PORT || 5000;

var api_routes = require("./api_routes.js");


app.set('view engine', 'ejs');
app.use('/api', api_routes);
app.use('/assets', express.static('assets'))

app.get('/home',(req,res) =>{
  res.render('homepage');
});

app.listen(port, function(){
  console.log("Server Running");
})
