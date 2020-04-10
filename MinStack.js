/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.

Consider each node in the stack having a minimum value. (Credits to @aakarshmadhavan)
*/
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    let storage = [];
    let idx = 0
    let min = null;
    this.push = int => {
      if (storage.length === 0) {
        min = int;
        storage.push({next: null, value: int, idx: 0})
      } else {
        storage.push( {next: storage[idx], value: int, idx})
        idx += 1;
        min = int > min ? min : int;
      }
    }
    this.pop = () => {
      if(storage.length === 0 ) return;
      if(storage[storage.length-1].value === min) {
        min = storage[0].value
        storage.pop();
        storage.forEach(obj => {
          min = min < obj.value ? min : obj.value
        })
      } else {
        storage.pop()
      }
    }
    this.top = () => storage[storage.length-1].value
    this.getMin = () => min;
    this.storage = () => storage;
};

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function(x) {
    
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
    
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
    
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
    
// };
var  minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   //?
minStack.pop();
minStack.top();      //?
minStack.getMin();   //?
/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */