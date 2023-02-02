var buffer = new Buffer.alloc(36);
var json = buffer.toJSON(buffer);

console.log(json);