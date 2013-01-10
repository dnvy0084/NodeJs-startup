var http = require("http");
var fs = require("fs");
var ejs = require( 'ejs' );

var server = http.createServer();

server.on( 'request', function( req, res )
{
    fs.readFile( process.argv[1].replace( /\w+\.\w+/, '' ) + 'page/EJSPage.ejs', 'utf8', function( err, data )
    {
        res.writeHead( 200, { 'Content-Type': 'text/html' } );
        res.end( ejs.render( data, { name: 'Kim', description: 'test' } ) );
    });
})

server.listen( process.env.PORT, process.env.IP );