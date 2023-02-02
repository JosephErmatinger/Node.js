var buffer1 = new Buffer.from('JavaScript is awesome!');

//copy a buffer
var buffer2 = new Buffer.alloc(22);
buffer1.copy(buffer2);
console.log("\nBuffer 2 content: " + buffer2.toString());