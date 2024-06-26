// # Move Zeroes

// https://leetcode.com/problems/move-zeroes/solutions/4895187/solution-with-real-life-example-ngm/

// **Two-Pointer Approach**

var moveZeroes = function(nums) {
    let j=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            [nums[j],nums[i]]=[nums[i],nums[j]]
            j++;
        }
    }
};


//Loops
var moveZeroes = function(nums) {
    let j=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[j] = nums[i]
            j++;
        }
    }
    for(let i=j;i<nums.length;i++)
    {
        nums[i]=0
    }
};