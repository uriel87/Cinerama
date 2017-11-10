
var express = require('express'),
    app = express();

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/css', express.static(__dirname + './js'));
app.use('/js', express.static(__dirname + './css'));
app.use('/images', express.static(__dirname + './images'));
app.use('/views', express.static(__dirname + './views'));


app.use('/', express.static('./')).listen(process.env.PORT || 8080);

console.log("Listen to port 8080");