
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxCount = 0;
    for(let i=0;i< nums.length;i++){
        if(nums[i]===1)
            count+=1
        if(nums[i] !== 1)
         count=0
        if(maxCount < count)
            maxCount = count
    }
    return maxCount;
};

var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxCount =0;
    for(let num of nums){
        count = (num===1)? count+1:0
        maxCount = math.max(count,maxCount);
    }
    return maxCount
};
