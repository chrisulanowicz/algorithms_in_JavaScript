// write standalone functions implementing bubble sort for arrays
function arrayBubbleSort(arr){ // pass in the array to be sorted
	var len = arr.length; // store the length of the array in a variable to use later
	var temp; // declare the temp variable that we'll use inside our sorting algorithm
	while(len != 0){  // do this loop as long as len (set originally as array's length) isn't 0
		for(var i=0;i<len;i++){  // setup our inner loop to iterate through the array
			if(arr[i] > arr[i+1]){ // check if the value at our current index is greater than the value at the next index
				temp = arr[i]; // if it is then these 2 values aren't sorted so we need to swap them
				arr[i] = arr[i+1];
				arr[i+1] = temp;
			}	
		} // at this point we'll have iterated through the array and whatever the largest value was will have been moved to the end
		len--; // decrement our len because we now know that the end of the array is sorted 
	} // so when we loop back we only need to sort from the beginning of the array up until we get to where the sorted portion starts
	return arr;
}

//es6ified
// function arrayBubbleSort(arr) {
// 	let len = arr.length;
// 	while (len != 0) {
// 		for (let i = 0; i < len; i++) {
// 			if (arr[i] > arr[i+1]) {
// 				[arr[i], arr[i+1]] = [arr[i+1], arr[i]];
// 			}
// 		}
// 		len--;
// 	}
// 	return arr;
// }

// ======================================================================
// Code below exports this functions for Mocha testing
if (typeof exports !== 'undefined') {
	exports.bubbleSort = arrayBubbleSort;
}