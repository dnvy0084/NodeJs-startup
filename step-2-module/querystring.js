var querystring = require( 'querystring' );
var url = require( 'url' );

var sampleURL = 'https://mail.google.com/mail/u/0/?tab=wm&test=78&addr=test#inbox';

//url parse해서 urlObject 생성
var parseObj = url.parse( sampleURL );
//url object의 query( JSON )를 object 형태로 파싱.
var query = querystring.parse( parseObj.query );
console.log( query );

//query object를 sep=&, eq== 변수에 맞게 string으로 바꿔줌 
var querystr = querystring.stringify( query );
console.log( querystr );