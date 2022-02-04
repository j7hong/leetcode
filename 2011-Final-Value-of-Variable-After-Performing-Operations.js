/*
	From: leetcode.com
	
  2011. Final Value of Variable After Performing Operations

	Difficulty: Easy

	Time Submitted 		Status 		Runtime 	Memory 		Language
	01/17/2022 18:56	Accepted	84 ms			40 MB			javascript

	Description:
		There is a programming language with only four operations and one variable X:
		++X and X++ increments the value of the variable X by 1.
		--X and X-- decrements the value of the variable X by 1.
		Initially, the value of X is 0.

		Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

		Example 1:
		Input: operations = ["--X","X++","X++"]
		Output: 1
		Explanation: The operations are performed as follows:
		Initially, X = 0.
		--X: X is decremented by 1, X =  0 - 1 = -1.
		X++: X is incremented by 1, X = -1 + 1 =  0.
		X++: X is incremented by 1, X =  0 + 1 =  1.

	*/

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  let sum = 0
  for (let x=0; x < operations.length; x++) {
    switch (operations[x]) {
        case "X++":
        case "++X":
           sum++ 
           break;
        case "X--":
        case "--X":
           sum--
           break;
    }
  }
  return sum;
};
