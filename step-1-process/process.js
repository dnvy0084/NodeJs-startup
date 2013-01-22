var util = require( 'util' );


//실행 매개변수 
var argv = process.argv;

//프로그램 실행환경 객체
var env = process.env;

//Node.JS 버전
var version = process.version;

//종속된 프로그램 버전
var versions = process.versions;

//프로세서 아키텍쳐
var arch = process.arch;

//memory usage instance return;
var memoryUsage = process.memoryUsage();

//실행된 시간 반환
var uptime = process.uptime();

var info = [ argv, env, version, versions, arch, memoryUsage, uptime ];

var output = '[process info]\n';
var desc;

for( var i = 0; i < info.length; i++ )
{
    if( typeof( info[i] ) == 'object' )
    {
        desc = util.format( '%j', info[i] );
    }
    else
    {
        desc = info[i];
    }
    
    output += desc + '\n';
}

console.log( output );

//프로그램 종료.
//process.exit();

/** 중요 ** 예기치 않은 에러 발생시 프로세스가 다운됨. exception error에 대한 처리가 반드시 필요함 **/
process.on( 'uncaughtException', function( message ){
    console.log( '\u001b[31m', 'uncaughtException: ' + message );
    console.log( '\u001b[0m' );
} );

//null pointer error
info.test();

