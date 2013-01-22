var connect = require( 'connect' ),
    fs = require("fs");

var server = connect.createServer();

function request( app )
{
    app.get( '/home/index', function( req, res, next )
    {
        res.writeHead( 200, { 'Content-Type': 'text/html' } );
        res.end( '<h1>' + JSON.stringify( req.query ) + '</h1>' );
    });
    
    app.get( '/home/about', function( req, res, next )
    {
        res.writeHead( 200, { 'Content-Type': 'text/html' } );
        res.end( '<h1>About page</h1>' );
    });
    
    app.get( '/home/test/:id', function( req, res, next )
    {
        res.writeHead( 200, { 'Content-Type': 'text/html' } );
        res.end( ( '<h1>test:' + req.params.id + '</h1>' ) );
    }); 
    
    app.get( '/', function( req, res, next )
    {
        res.writeHead( 200, { 'Content-Type': 'text/html' } );
        res.end( '<h1>Main.html</h1>' );
    });
    
    app.get( '/setCookie', function( req, res, next )
    {
        res.writeHead( 200, { 
            'Content-Type': 'text/html', 
            'Set-Cookie': [ 'a=1', 'b=2' ] 
        } );
        
        res.end( '<a href="/getCookie" > SetCookie </a>' )
    });
    
    app.get( '/getCookie', function( req, res, next ) 
    { 
        console.log( 'get cookie', req.cookies, req.headers.cookie );
        
        res.writeHead( 200, { 'Content-Type': 'text/pl'} );
        res.end( '<h1>' + JSON.stringify( req.cookies ) + '</h1>')
    });
    
    app.get( '/login', function( req, res, next )
    {
        
    });
    
    app.all( '*', function( req, res, next )
    {
        throw new Error( 'page not found' );
        
    });
}

server.use( connect.logger() );
server.use( connect.query() );
server.use( connect.cookieParser() );
server.use( connect.bodyParser() );

server.use( connect.router( request ) );
server.use( connect.errorHandler( { 
    stack: true,
    message: true,
    dump: true
} ))

server.listen( process.env.PORT, function()
{
    console.log( 'Sever running at ' + process.env.IP );
});
