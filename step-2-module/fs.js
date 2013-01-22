var fs = require( 'fs' );

//현재 실행중인 js파일이 있는 폴더 경로. cloud9환경이라 그런지 상대경로로 접근이 안됨. 
var path = process.argv[1].replace( /\w+\.\w+/, '' );
//__dirname + '/file/test.txt' 로도 가능. 


//동기식으로 파일 읽기

try
{
    var text = fs.readFileSync( path + 'file/test.txt', 'utf-8' );
    console.log( 'readFile Sync', text )//.toString() );
}
catch( e )
{
    console.log( e );
}


//비동기식 파일 읽기
fs.readFile( path + 'file/test.txt', 'utf-8', function( error, data )
{
    console.log( 'readFile ASync', data );
});

//fs.writeFileSync( path + 'file/test.txt', text + ': written sync', 'utf8' );

//비동기식 파일 쓰기
fs.writeFile( path + 'file/test.txt', text + ': written async', function( error )
{
    console.log( 'write file async complete' );
});