/**
 *  PeerGaming Server
 *  =================
 *
 *  Backend for handling requests.
 */


var http		= require('http'),
    config	= require('./config.js'),
    sse     = require('./lib/transport.sse.js'),
    ws			= require('./lib/transport.socket.js');


// ServerSentEvents
var server = http.createServer( function ( req, res ) {

	if ( req.headers && req.headers.accept !== 'text/event-stream' && req.method !== 'POST' ) {

		res.writeHead(404);
		return res.end();
	}

	sse.handle( req, res );
});

// WebSockets
server.listen( config.port, function(){

	ws.init( server, config.origin );

	console.log( '[' + new Date() + '] - Server is listening on port: ' + config.port );
});
