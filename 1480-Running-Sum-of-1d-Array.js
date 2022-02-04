/*
	From: leetcode.com
	
	1480. Running Sum of 1d Array
	Difficulty: Easy

	Time Submitted 		Status 		Runtime 	Memory 		Language
	01/16/2022 15:04	Accepted	80 ms			40.4 MB		javascript	

	Description:
	  Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
		Return the running sum of nums.

		Example 1:
		Input: nums = [1,2,3,4]
		Output: [1,3,6,10]
		Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

	*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum, sumArray
    sum = 0
    sumArray = []
    if (typeof nums != "object") return "Nums is not an object!";
    else if (nums.length >= 1 && nums.length <= 1000) {
        nums.forEach( num => {
            if (sum == 0) {
                sum = num
                sumArray.push(num)
            }
            else {
                sum += num
                sumArray.push(sum);
            }
        });
        return sumArray;
    }
};
