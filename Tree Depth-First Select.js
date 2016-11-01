/*
Tree Depth-First Select

Implement a depth-first method on a tree class.

DFSelect accepts a filter function, calls that function on each of the nodes in Depth First order, and returns a flat array of node values of the tree for which the filter returns true.

Example:

var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);

root1.DFSelect(function (value, depth) {
  return value % 2 === 1;
}) //=> [1, 5, 3, 7]

root1.DFSelect(function (value, depth) {
  return depth === 1;
}) //=> [2, 3]

*/


///Solution///

var Tree = function(value){
 this.value = value;
 this.children = [];
};

var sibling = Tree(4)
sibling


Tree.prototype.DFSelect = function(filter, count) {
   
   var newArray=[];
   var test=[];
   

   if (count===undefined || count === null) {
     count=0;
   }
 
   if (filter(this.value,count)){
       newArray.push(this.value);
   }

   var toTravel = this.children.slice();

   while(toTravel.length){
       var node = toTravel.shift();

        test=(node.DFSelect(filter,count+1));

      newArray = newArray.concat(test);

   }

   return newArray;

};




Tree.prototype.addChild = function(child){
 if (!child || !(child instanceof Tree)){
   child = new Tree(child);
 }
 if(!this.isDescendant(child)){
   this.children.push(child);
 }else {
   throw new Error("That child is already a child of this tree");
 }
 // return the new child node for convenience
 return child;
};

Tree.prototype.isDescendant = function(child){
 if(this.children.indexOf(child) !== -1){
   // `child` is an immediate child of this tree
   return true;
 }else{
   for(var i = 0; i < this.children.length; i++){
     if(this.children[i].isDescendant(child)){
       // `child` is descendant of this tree
       return true;
     }
   }
   return false;
 }
};

Tree.prototype.removeChild = function(child){
 var index = this.children.indexOf(child);
 if(index !== -1){
   // remove the child
   this.children.splice(index,1);
 }else{
   throw new Error("That node is not an immediate child of this tree");
 }
};