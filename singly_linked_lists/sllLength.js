var SLL = require("../singly_linked_lists/sllAdd.js"); // we need this file to access our singly linked list class definition
// and it's functions to create a random list

// function that returns the length of a list (aka count of nodes)
SLL.prototype.length = function(){
	var count = 0;  // set our counter variable that'll keep tally of the number of nodes starting with 0
	var current = this.head; // set our current variable that we'll use to iterate through the list as the head
	while(current){ // run loop while current node exists and is not null (if list is empty current would have been set to null)
		count++; // increment our counter
		current = current.next; // move our current variable along to the next node
	}
	return count;
}



// test cases for singly linked list bubble sort
var testSll = new SLL(); // create our new empty list
console.log(testSll);
console.log(testSll.length());
testSll.randomList(6); // add 6 random nodes into the list
console.dir(testSll, {depth: null});
console.log(testSll.length());