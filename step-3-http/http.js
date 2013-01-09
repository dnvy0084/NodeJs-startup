var http = require( 'http' );
var fs = require( 'fs' );


var server = http.createServer();

var index;

fs.readFile( process.argv[1].replace( /\w+\.\w+/, '' ) + 'pages/index.html', 'utf8', function( error, data )
{
    index = data;
    
    console.log( index );
    init();
});

function init()
{
    server.listen( process.env.PORT, process.env.IP );
}

server.on( 'request', function( req, res )
{
    res.writeHead( 200, { 'Content-Type': 'text/html' } );
    res.end( index );
});

server.on( 'connection', function( client )
{
    console.log( 'client connected' );
});

server.on( 'close', function()
{
    console.log( 'server closed' );
});