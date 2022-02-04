/*
	From: leetcode.com
	
	1929. Concatenation of Array
	Difficulty: Easy

	Time Submitted 		Status 		Runtime 	Memory 		Language
	01/19/2022 19:50	Accepted	80 ms			42.6 MB		javascript	

	Description:
		Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

		Specifically, ans is the concatenation of two nums arrays.

		Return the array ans.

		Example 1:

		Input: nums = [1,2,1]
		Output: [1,2,1,1,2,1]
		Explanation: The array ans is formed as follows:
		- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
		- ans = [1,2,1,1,2,1]
	*/

 /* @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let size
    // know the length of the array
    size = nums.length

    // For one less than the length of the array
    for (let j=0;j <= size -1; j++) {
      // Store the value at each index in the same array at the end, increasing the index by one every time
      nums.push(nums[j])
    }

    return nums;
};

//console.log(getConcatenation([1,2,5,4]));
