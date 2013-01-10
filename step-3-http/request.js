var http = require("http");
var fs = require("fs");
var url = require("url");

var server;
var mainPath = process.argv[1].replace( /\w+\.\w+/, '' ) + 'pages';
var pageMap = {};

console.log( mainPath );

function init()
{
    server = http.createServer();
    
    addEvents();
    
    server.listen( process.env.PORT, process.env.IP );
}

function addEvents()
{
    server.on( 'request', function( req, res )
    {
        var path = url.parse( req.url ).pathname;
        var filepath;
        
        console.log( 'request>>', path );
        
        switch( path )
        {
            case '/':
                filepath = mainPath + '/index.html';
                break;
                
            case '/index.html':
            case '/sub0.html':
                filepath = mainPath + path;
                break;
                
            default:
                res.writeHead( 404, { 'Content-type': 'text/plain' } );
                res.end();
                return;
        }
        
        console.log( '>>', path, filepath );
        
        fs.readFile( filepath, 'utf8', function( err, data )
        {
            if( err )
            {
                console.log( err );
                res.writeHead( 404, { 'Content-Type': 'text/plain' } );
                res.end();
            }
            else
            {
                res.writeHead( 200, { 'Content-Type': 'text/html' } );
                res.end( data );
            }
        });
        
       /* while( a.length > 0 )
        {
            name = a.shift();
            
            if( name.length > 0 )
            {
                if( isFileName( name ) )
                {
                    pointer = pointer === null ? pageMap.default : pointer;
                }
                else
                {
                    if( !pointer[ name ] ) pointer[ name ] = {};
                    pointer = pointer[ name ];
                }
            }
            else 
            {
                if( a.length == 0 )
                {
                    var pathname = pointer.default;
                }
                else
                {
                    continue;
                }
            }
        }*/
    });   
}

function isFileName( name )
{
    return name.match( /\./ ) !== null;
}

init();
