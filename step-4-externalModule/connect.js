var connect = require("connect");
  
var server = connect.createServer( function( req, res, next )
{
    console.log( 'call 1' );
    next();
    
}, function( req, res, next )
{
    console.log( 'call 2' );
    next();
 
}, function( req, res, next )
{
    console.log( 'call 3' );
    
    res.writeHead( 200, {'Content-Type': 'text/html'} );
    res.end( '<h1>hello connect module</h1>' );
 
}).listen( process.env.PORT, process.env.IP );
