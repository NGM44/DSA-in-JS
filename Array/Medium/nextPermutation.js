// https://leetcode.com/problems/next-permutation/solutions/4915357/solution-with-real-life-example-ngm/

// Explanation:

// Find the pivot: Iterate from the right to find the first index i where the element is smaller than its immediate right neighbor (nums[i] < nums[i + 1]). This is the "pivot" point.
// Handle largest permutation: If no such pivot exists, the array is in descending order (the largest permutation). Reverse it for the smallest permutation.
// Find swap candidate: Iterate from the right again, this time to find the smallest number nums[j] that is still larger than nums[i].
// Swap: Swap nums[i] and nums[j]. This creates a slightly bigger permutation.
// Minimize remaining suffix: Reverse the portion of the array after the pivot index (i + 1) to get the lexicographically next permutation.

var nextPermutation = function(nums) {
    let i = nums.length-2;
    while(i>=0 && nums[i]>=nums[i+1])
    {
        i--;
    }
    if(i<0){
        reverse(nums,0)
        return;
    }
    let j = nums.length -1;
    while(j >=0 && nums[j]<= nums[i]){
        j--;
    }
    [nums[i],nums[j]]= [nums[j],nums[i]];
    return reverse(nums,i+1);
};

const reverse= (nums,start) =>{
let i=start;
let j = nums.length-1;
while(i<j){
    [nums[j],nums[i]]=[nums[i],nums[j]]
    i++;
    j--
}
}