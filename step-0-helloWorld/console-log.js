 //console.log();
console.log( 'hello world' );

//console.log with formatted;
var a = 10;
var b = 'String';
var c = { a: 10, b: 'String', d: 30 };
console.log( 'a=%d, b=%s, c=%j, d=%d', a, b, c, c.d );

//console.info();
console.info( 'console.info %s', 'same as console.log' );

//console.error();
console.error( 'some error' );

//console.warn();
console.warn( 'same as console.error' );

//console.time( label );
console.time( 'someLabel' );

for( var i = 1e4; i--; )
{
    a += Math.sqrt( a );
}

console.timeEnd( 'someLabel' );

//console.log with colors;
console.log( '\u001b[31m', 'hello world!' );
console.log( '\u001b[32m', 'hello world!' );
console.log( '\u001b[33m', 'hello world!' );
console.log( '\u001b[34m', 'hello world!' );
console.log( '\u001b[35m', 'hello world!' );
console.log( '\u001b[36m', 'hello world!' );
console.log( '\u001b[37m', 'hello world!' );
console.log( '\u001b[0m', 'hello world!' );

