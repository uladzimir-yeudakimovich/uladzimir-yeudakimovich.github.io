const static = require("node-static");
const file = new static.Server('.');
const NodeCache = require( "node-cache" );
const myCache = new NodeCache( { stdTTL: 100, checkperiod: 120 } );
myCache.set( key, val, [ ttl ], [callback] );
obj = { my: "Special", variable: 42 };
success = myCache.set( "myKey", obj, 10000 );

require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    file.serve(request, response);
  }).resume();
}).listen(3000);
