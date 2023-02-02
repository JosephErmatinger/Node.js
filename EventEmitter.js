var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener1
var listener1 = function listener1() {
   console.log('\nlistener1 executed.\n');
}
// listener2
var listener2 = function listener2() {
   console.log('listener2 executed.\n');
}
// Bind the connection event with the listener1 function
eventEmitter.addListener('connection', listener1);

// Bind the connection event with the listener2 function
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " event listeners listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listener1 function
eventEmitter.removeListener('connection', listener1);
console.log("listener1 was removed from listener array.\n");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " event listener listening to connection event\n");

console.log("Program Ended.");