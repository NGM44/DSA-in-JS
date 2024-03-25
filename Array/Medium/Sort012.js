// https://leetcode.com/problems/sort-colors/solutions/4904112/solution-with-real-life-example-ngm/

var sortColors = function(nums) {
    let low =0;
    let mid =0;
    let high=nums.length-1;
    while(mid<=high){
        if(nums[mid]===0){
           [ nums[low],nums[mid]]=[nums[mid],nums[low]];
            low++;
            mid++;
        } else if(mid===1){
            mid++;
        }
        else{
            [nums[high],nums[mid]]=[nums[mid],nums[high]];
            high--;
            mid++
        }
    }

};