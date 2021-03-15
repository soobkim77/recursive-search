function recursiveSearch(arr, target) {

  if (arr.length > 0) {
    if (arr[0] !== target){
      arr.splice(0,1)
      recursiveSearch(arr, target)
    }
  }
  if (arr.length == 0){return false};
  if (arr[0] == target){return true}
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: false");
  console.log("=>", recursiveSearch([], 2));


  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;


// Please add your pseudocode to this file
/* 
1st test should check to see if arr exists. If the arr is undefined, return false
2nd test should check to see if arr[0] == target, if true, return true
if false, splice arr[0], return the arr to be passed back into the function

*/

// And a written explanation of your solution
/* 
The function recursiveSearch takes in two arguments, an array, and a target value. The initial conditional checks to see if the array is empty or not.
If the array has values, then it passes into the second conditional
here it checks to see if the 
*/
