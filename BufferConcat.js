var buffer1 = new Buffer.from('Concatenated  ');
var buffer2 = new Buffer.from('buffer 1 and buffer 2!');
var buffer3 = Buffer.concat([buffer1,buffer2]);

console.log("Buffer 3 content: " + buffer3.toString());