// https://leetcode.com/problems/single-number/solutions/4902995/solution-by-ngm/
var singleNumber = function(nums) {
    let result = 0;
    for (let num of nums){
        result ^= num
    }
    return result;
};