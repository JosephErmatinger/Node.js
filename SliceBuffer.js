var buffer1 = new Buffer.from('JavaScript, Java, JavaFX, Ruby, Python, C, C++, ABAP, Android!');

//slicing a buffer
var buffer2 = buffer1.slice(18,24);

//print JavaFX
console.log("\nBuffer 2 content: " + buffer2.toString());