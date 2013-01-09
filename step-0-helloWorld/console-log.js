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
