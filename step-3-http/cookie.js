var http = require( 'http' );
var fs = require( 'fs' );

var server = http.createServer();

server.on( 'request', function( req, res )
{
    var date = new Date();
    date.setDate( date.getDate() + 7 );
    
    res.writeHead( 200, {
        'Content-Type': 'text/plain',
        'Set-Cookie': [ 'breakfast = toast; Expires = ' + date.toUTCString(), 'dinner = chicken' ]
    } )
    
    res.writeHead( 302, { 'Location': 'http://www.naver.com' } );
    
    res.end();
});

server.listen( process.env.PORT, process.env.IP );