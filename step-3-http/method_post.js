var http = require("http");
var url = require("url");
var fs = require("fs");
var querystring = require("querystring");

var server = http.createServer();
var page;

server.on( 'request', function( req, res )
{
    var method = req.method;
    var postData = '';
    
    console.log( 'Method = ', method );
    
    if( method == 'POST' )
    {
        req.on( 'data', function( data )
        {
            console.log( 'POST DATA', data.toString() );
            postData += data.toString();
        });
        
        req.on( 'end', function()
        {
            console.log( 'data end' );
            
            var s = '<HTML><head/><body><h1>' + JSON.stringify( querystring.parse( postData ) ) + '</h1></body></HTML>';
            res.writeHead( 200, { 'Content-Type': 'text/html' } );
            res.end( s );
        });
    }
    else
    {
        sendForm( req, res );
    }
});

function sendForm( req, res )
{
    if( !page )
    {
        fs.readFile( process.argv[1].replace( /\w+\.\w+/, '' ) + 'pages/sendPost.html', 'utf8', function( err, data )
        {
            page = data;
            response( res );
        });
    }
    else
    {
        response( res );
    }
}

function response( res )
{
    res.writeHead( 200, { 'Content-Type': 'text/html' } );
    res.end( page );
}

server.listen( process.env.PORT, process.env.IP );