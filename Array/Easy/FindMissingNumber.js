// # Missing Number

// https://leetcode.com/problems/missing-number/solutions/4902575/solution-with-real-life-example-ngm/

// summation technique

var missingNumber = function(nums) {
    let actualSum = nums.length * (nums.length+1)/2;
    let sumation = 0;
    for(let i=0;i< nums.length;i++)
    sumation += nums[i];
    return actualSum - sumation;
};

var missingNumber = function(nums) {
    const hashset = new Set();
    for (let num of nums)
       { hashset.add(num);}
    for(let i=0;i<=nums.length;i++)
    {
        if(!hashset.has(i)) return i;
    }

};
