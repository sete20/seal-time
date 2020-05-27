var express = require('express');
var socket = require('socket.io');
var application = express();
// to detect the serve and use the bort 
var server = application.listen(5000,function () {
    console.log('your server has ben started at http://localhost:5000');
});

application.use(express.static('public_html'));

var sio = socket(server);
sio.on('connection',function (visitor) {
    console.log('we have a new visitor as id', visitor.id);

visitor.on('message',function(data){
		sio.sockets.emit('new_msg',data); 
	});

	
	visitor.on('borad',function(data){
		visitor.broadcast.emit('new_borad',data); 
	});


});

