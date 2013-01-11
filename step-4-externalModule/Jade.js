var jade = require( 'jade' )
  , http = require("http")
  , fs = require("fs");
  
  
var server = http.createServer();

server.on( 'request', function( req, res )
{
    fs.readFile( process.argv[1].replace( /\w+\.\w+/, '' ) + 'page/JadePage.jade', 'utf8', function( err, data )
    {
        var compile = jade.compile( data );
        
        res.writeHead( 200, { 'Content-Type': 'text/html' } );
        res.end( compile( { h3: 'dynamic variable', desc: 'node js jade module sample' } ) );
    });
});

server.listen( process.env.PORT, process.env.IP );