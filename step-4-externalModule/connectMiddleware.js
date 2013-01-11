var connect = require("connect");

var server = connect.createServer();

server.use( connect.query() );
server.use( connect.logger( ':date + :method + :url' ) );

//server.use( connect.router( function( connectMiddleware )
//{
//    
//}));

server.use( connect.static( __dirname + '/res' ) );

console.log( __dirname );

server.use( function( req, res )
{
    if( req.query.type == 'error' )
    {
        throw new Error( 'page not found' );
    }
    else if( req.query.type == 'img' )
    {
        res.writeHead( 200, { 'Content-Type': 'text/html' } );
        res.end( '<img src="/joker.png" width=100% />' );
    }
    else
    {
        res.writeHead( 200, { 'Content-Type': 'text/html' } );
        res.end( '<h1>' + JSON.stringify( req.query ) + '</h1>' );
    }
});

server.use( connect.errorHandler( 
    {
        stack: true,
        message: true,
        dump: true
    })
);

server.listen( process.env.PORT, function()
{
    console.log( 'server running at ' + process.env.IP );
})