// https://leetcode.com/problems/two-sum/solutions/4904081/solution-with-real-life-example-ngm/

var twoSum = function(nums, target) {
   let hashMap ={};
   for(let i=0;i<nums.length;i++){
    complementary = target-nums[i];
    if(complementary in hashMap){
        return [hashMap[complementary],i]
    }
    hashMap[nums[i]]=i
   }
};