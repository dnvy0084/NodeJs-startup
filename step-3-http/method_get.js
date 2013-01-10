var http = require("http");
var fs = require("fs");
var url = require("url");
var querystring = require("querystring");


var server = http.createServer();

server.on( 'request', function( req, res )
{   
    var method = req.method;
    
    console.log( 'current request`s method is ', method );
    
    var urlObj = url.parse( req.url );
    
    console.log( '%j', urlObj );
    
    var query = querystring.parse( urlObj.query );
    
    console.log( query );
    
    res.writeHead( 200, { 'Content-Type': 'text/html' } );
    res.end( '<HTML><head></head><body><h1>' + JSON.stringify( query ) + '</h1></body></HTML>' );
});

server.listen( process.env.PORT, process.env.IP );