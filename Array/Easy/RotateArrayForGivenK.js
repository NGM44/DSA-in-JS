https://leetcode.com/problems/rotate-array/solutions/4895147/solution-with-real-life-example-ngm/

// using Extra Array


function rotate(nums, k) {
    const rotated = new Array(nums.length);  
    for (let i = 0; i < nums.length; i++) {
        rotated[(i + k) % nums.length] = nums[i]; 
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = rotated[i];
    }
}


// Cyclic Replacement

function rotateCyclic(nums, k) {
    
   let shift = k % nums.length;
   let count = 0;
    for(let start = 0;count< nums.length;start++){
        let current = start;
        let prev=nums[start];
        do{
            let next = (shift+current)%nums.length;
            let temp = nums[next];
            nums[next] = prev;
            prev =temp;
            current = next;
            count++
        }while(start!==current);
    }
};

//recurssion
const reverse=function(nums, start, end){
    while(start<end){
        [nums[start],nums[end]]=[nums[end],nums[start]]
        start++;
        end--
    }
}
var rotateRecusion = function(nums, k) {
    k %= nums.length
    reverse(nums,0,nums.length-1);
    reverse(nums,0,k-1);
    reverse(nums,k,nums.length-1);

};