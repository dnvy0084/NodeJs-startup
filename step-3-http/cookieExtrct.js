var http = require("http");
var url = require("url");
var util = require("./util/pageUtil.js" );


var server = http.createServer();

server.on( 'request', function( req, res )
{
    var cookie = req.headers.cookie;
    
    var cookies = JSON.stringify( cookie ).split( ';' ).map( function( s )
    {
        var ss = s.split( '=' );
        var key = ss[0];
        var value = ss[1];
        var o = {};
        
        o[ key ] = value;
        
        return o;
    });
    
    res.writeHead( 200, { 
        'Content-Type': 'text/html',
        'Set-Cookie': ['name=kjh', 'age=35' ]
    } );
    
    res.end( util.getHTMLWithTitle( JSON.stringify( cookies ), 'h1' ) );
});

server.listen( process.env.PORT, process.env.IP );