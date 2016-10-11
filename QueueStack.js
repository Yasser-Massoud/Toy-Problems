/*
Queue Stack

Write a stack. Once you’re done, implement a queue using two stacks. 
Do not create a storage array for your queue.

*/

///Solution///

var Stack = function() {
  var storage = [];

  this.push = function(data){
     storage.push(data);
  };

  this.pop = function(){
    return storage.pop();
  };

  this.size = function(){
    return storage.length;
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(data){
    while(outbox.size() > 0){
      inbox.push(outbox.pop());
    }
    inbox.push(data)

  };

  this.dequeue = function(){
    while(inbox.size() > 0){
      outbox.push(inbox.pop());
    }
    return outbox.pop();
 
  };

  this.size = function(){
    return inbox.size()+outbox.size()
  };
};
