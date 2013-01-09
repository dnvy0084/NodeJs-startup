var http = require( 'http' );
var fs = require( 'fs' );

var img;

fs.readFile( process.argv[1].replace( /\w+\.\w+/, '' ) + 'pages/joker.png', function( err, data )
{
    img = data;
    
    if( err )
    {
        console.log( err );
    }
    else
    {
        server.listen( process.env.PORT, process.env.IP );
    }
});

var server = http.createServer();

server.on( 'request', function( req, res )
{  
    res.writeHead( 200, { 'Content-Type': 'image/png' } );
    res.end( img );
});