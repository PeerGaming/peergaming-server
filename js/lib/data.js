/**
 *  Data
 *  ====
 *
 *  Providing a simple interface - to store and offer data on request.
 */

// simple API service - which provides an interface for the data - send from the peers !
// can be used - accesed by 3rd party applications etc.


// storing data - which can be accesed through a get rquest !
// - can be extended for better integration/more details
var data = {};


function provideJSON ( data ) {

  data = JSON.stringify( data );

  res.writeHead( 200, {

    'Content-Type'                : 'application/json',
    'Content-Length'              : data.length,
    'Access-Control-Allow-Origin' : '*'
  });

  res.write( data );
  res.end();
}

module.exports = {};


// simple key -value, store - tracking...

















// location:2020

// var http = require('http'),
//     init = require('./helper/init'),

//     // providing a simple API with the content
//     articles = require('./routes/articles'),

//     projects = require('./routes/projects'),
//     music = require('./routes/music'),
//     images = require('./routes/images');

// // basic server
// http.createServer( function ( req, res ) {

//     // gives POST/GET Parameter + Type
//     init( req, function ( path, args ) {

//         switch ( path ){

//             case 'articles':
//                 articles( args, end );
//                 break;

//             case 'projects':
//                 projects( args, end );
//                 break;

//             case 'music':
//                 music( args, end );
//                 break;

//             case 'images':
//                 images( args, end );
//                 break;

//             default: end();
//         }

//     });

//     var end = function ( data ) {

//         data = data || 'Invalid';

//         var obj = JSON.stringify ( data );

//         res.writeHead( 200, {
//                                 'Content-Type': 'application/json',
//                                 'Content-Length': obj.length,
//                                 'Access-Control-Allow-Origin': '*'
//                             });
//         res.end( obj );
//     };


// }).listen( 2020, '127.0.0.1' );



// /*
//   CORS enabled echo server,
//   or client, POST && request.setRequestHeader( 'Content-Type', 'text/plain; charset=UTF-8' );
// */

// var http = require('http');

// http.createServer( function ( req, res ) {

//   var data = '';

//     req.on('data', function ( chunk ) { data += chunk; })
//        .on('end', function(){

//     // CORS check, pre-flighted
//     // (https://developer.mozilla.org/en-US/docs/HTTP_access_control)
//     // (http://pixelsvsbytes.com/blog/2011/12/ajax-cross-domain-requests-with-cors/)
//     if ( req.method === 'OPTIONS' ) {

//       res.writeHead( 200, {

//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//         'Access-Control-Allow-Headers': 'Content-Type, accept'
//       });

//       return res.end();
//     }

//     // else - regulary
//     res.setHeader('Access-Control-Allow-Origin', '*' );

//     res.end( data );
//   });


// }).listen( 2020, 'neurron.dev' );
