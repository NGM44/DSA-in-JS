// https://leetcode.com/problems/maximum-subarray/solutions/4908146/solution-with-real-life-example-ngm/
// Real Life Example
// Stock Market Analysis

// Identifying Trends: The maximum subarray algorithm is perfect for pinpointing periods of upward price movement (positive subarrays) within volatile stock data. Analysts can use this to determine the best times to buy and sell stocks for maximum profit.

// Example: Imagine the daily price changes of a stock over a month represented as an array. The maximum subarray would indicate the most profitable period within that month to have held the stock.

// Why Does This Matter?

// The maximum subarray problem has applications in:

// Stock Market Analysis: Identifying price trends with the most potential gain.
// Bioinformatics: Finding significant patterns within DNA sequences.
// Image Processing: Detecting regions of interest within images.

// Code
var maxSubArray = function (nums) {
    let max_sum = nums[0];
    let curr_sum = nums[0];

    for (let i = 1;i< nums.length;i++) {

        curr_sum = Math.max(nums[i], curr_sum + nums[i]);
        max_sum = Math.max(max_sum, curr_sum);

    }
    return max_sum;
};