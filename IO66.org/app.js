
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res){
  res.render('index', { title: 'IO66 | Coastal Coding', name: 'Coastal Coding' });
});

app.get('/events/?', function(req, res){
  res.render('events', { title: 'IO66 | Events', name: 'Events'  });
});

app.get('/about/?', function(req, res){
  res.render('about', { title: 'IO66 | About', name: 'About'  });
});

app.get('/members/?', function(req, res){
  res.render('members', { title: 'IO66 | Members', name: 'Members'  });
});

app.get('/contact/?', function(req, res){
  res.render('contact', { title: 'IO66 | Members', name: 'Contact Us'  });
});


http.createServer(app).listen(app.get('port'), function(){
  console.log("IO66.org server listening on port " + app.get('port'));
});