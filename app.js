'use strict';

const express = require('express');
const flash = require('express-flash');
const session = require('express-session');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const $ = require("jquery");
const format = require("util").format;
const morgan = require('morgan');

var app = express();

//Folders being accessed
//'public' is the folder that styling, fonts, images are in
app.use(express.static('public'));
//'views' is the folder where my layouts are in
app.use(express.static('views'));
//'routes' is where my specific handlebar templates and js functions are
app.use(express.static('routes'));
//'vendors' is where my template files are
app.use(express.static('vendors'));

//Connect Mongoose to your .js and have it access the MongoBD
const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/shoe-catalogue-api";
mongoose.connect(mongoURL);

//Port and environment variable
app.set('port', (process.env.PORT || 3000));

//Use ExpressHandlebars
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Use Morgan - the logger
app.use(morgan("dev"));

//Use bodyParser
var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

//Catch 404 error and forward to error handler
app.use(function(req, res, next){
  var err = new Error("Not found");
  err.status = 404;
  next(err);
});

//Error handler
app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

//Use flash for error messages
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true
  }
}));
app.use(flash());

//Functions being accessed
const Models = require("./models");
const Routes = require("./routes");
const ShoesCatalogue = require("./shoesCatalogue");

//Access the function
const models = Models(mongoURL);
const ShoesRoutes = ShoesCatalogue(models);

app.use('/api/shoes', Routes);

//Using "/" makes it the "index page" i.e. it has no route
// app.get('/', (req, res) => {
//   res.render("index");
// });


//Shows the login for admin of waiter to access
// app.get ('/api/shoes', shoes.home)
// app.get('/login', waiterAvailabilityRoutes.login);
// app.get('/waiter/:username', waiterAvailabilityRoutes.waiter);
// app.get('/admin', waiterAvailabilityRoutes.admin);
//Post data
// app.post('/login', waiterAvailabilityRoutes.login);
// app.post('/waiter/:username', waiterAvailabilityRoutes.waiter);
// app.post('/admin/remove', waiterAvailabilityRoutes.remove);



//Hosts my server
var server = app.listen(app.get("port"), () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Shoe Catalogue API listening at http://%s:%s', host, port);
});