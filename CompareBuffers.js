var buffer1 = new Buffer.from('123');
var buffer2 = new Buffer.from('456');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" is before " + buffer2);
} else if(result === 0) {
   console.log(buffer1 +" is same as " + buffer2);
} else {
   console.log(buffer1 +" is after " + buffer2);
}