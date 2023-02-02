buffer = new Buffer.alloc(26);

for (var i = 0 ; i < 26 ; i++) {
  buffer[i] = i + 97;}
  
console.log(buffer.toString('utf8'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log(buffer.toString('ascii',0,3));   // outputs: abc
console.log(buffer.toString('utf8',0,4));    // outputs: abcd
console.log(buffer.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde