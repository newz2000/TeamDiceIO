var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket){
  console.log('a user connected');
    socket.on('roll', function(dice){
        console.log(dice);

        var rolledDice = {};

        if (dice.die1) {
            rolledDice.die1 = Math.floor((Math.random() * 6) + 1);
        }
        if (dice.die2) {
            rolledDice.die2 = Math.floor((Math.random() * 6) + 1);
        }
        if (dice.die3) {
            rolledDice.die3 = Math.floor((Math.random() * 6) + 1);
        }
        if (dice.die4) {
            rolledDice.die4 = Math.floor((Math.random() * 6) + 1);
        }
        if (dice.die5) {
            rolledDice.die5 = Math.floor((Math.random() * 6) + 1);
        }
        if (dice.die6) {
            rolledDice.die6 = Math.floor((Math.random() * 6) + 1);
        }
        if (dice.die7) {
            rolledDice.die7 = Math.floor((Math.random() * 12) + 1);
        }

            // die1: Math.floor((Math.random() * 6) + 1),
            // die2: Math.floor((Math.random() * 6) + 1),
            // die3: Math.floor((Math.random() * 6) + 1),
            // die4: Math.floor((Math.random() * 6) + 1),
            // die5: Math.floor((Math.random() * 6) + 1),
            // die6: Math.floor((Math.random() * 6) + 1),
            // die7: Math.floor((Math.random() * 12) + 1)
        

        io.emit('roll message', rolledDice);

    });
});

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var port = Number(process.env.PORT || 5000);

http.listen(port, function() {
  console.log('Listening on port %d', http.address().port);
});

// module.exports = app;
