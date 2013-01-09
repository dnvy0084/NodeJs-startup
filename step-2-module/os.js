//os 모듈 임포트
var os = require( 'os' );
var util = require( 'util' );

console.log( 'os module desc: \n%j', os );

var methodnames = [
    'hostname',
    'type',
    'platform',
    'arch',
    'release',
    'uptime',
    'loadavg',
    'totalmem',
    'freemem',
    'cpus',
    'networkInterfaces'
];

var value;
var desc;

for( var i = 0; i < methodnames.length; i++ )
{
    value = os[ methodnames[i] ]();
    
    if( typeof( value ) == 'object' )
    {
        desc = util.format( '%j', value );
    }
    else
    {
        desc = value;
    }
    
    console.log( methodnames[i] + ': ' + desc );   
}