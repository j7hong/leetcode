/*
	From: leetcode.com
	
	1672. Richest Customer Wealth

	Difficulty: Easy

	Time Submitted 		Status 		Runtime 	Memory 		Language
	01/25/2022 19:35	Accepted	90 ms			38.4 MB		javascript

	Description:
		You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the jth bank. Return the wealth that the richest customer has.

		A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

		Example 1:
		Input: accounts = [[1,2,3],[3,2,1]]
		Output: 6
		Explanation:
		1st customer has wealth = 1 + 2 + 3 = 6
		2nd customer has wealth = 3 + 2 + 1 = 6
		Both customers are considered the richest with a wealth of 6 each, so return 6.
	*/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0
    let wealth
    const reducer = (previousValue, currentValue) => previousValue + currentValue
    accounts.forEach( customer => {
      wealth = customer.reduce(reducer)
      if (wealth > maxWealth) maxWealth = wealth
      //console.log(maxWealth, wealth);
    });
    return maxWealth;
};
