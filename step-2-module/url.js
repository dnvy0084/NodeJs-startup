var url = require( 'url' );

var sampleURL = 'https://mail.google.com/mail/u/0/?tab=wm#inbox';

//parse URL문자열을 URL객체로 리턴. 
var urlObj = url.parse( sampleURL );

console.log( '%j', urlObj );

//format URLObject를 URL문자열로 변환 후 반환.
var urlStr = url.format( urlObj );

console.log( urlStr );