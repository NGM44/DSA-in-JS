// check if array is sorted and rotated

//  https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/4893582/solution-with-real-life-example-ngm/

function check(num) {
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>nums[(i+1)%nums.length]){
            count++;
        }
        if (count> 1)
        return false;
    }
    return true;
};

// **Optimization Strategies**

// 1. **Linear Search:**
//     - Iterate through the array.
//     - If you find a pair where `nums[i] > nums[i + 1]`:
//         - Check if it's the first "dip" you've encountered.
//         - If it's not the first dip, return `false` immediately.
//         - Ensure that the array "wraps around" correctly from the end to the beginning.
//     - If you finish the loop without finding more than one dip, return `true`.

// **Real Life Scenario**

// **Rearranging Books on a Shelf**

// - **Scenario:** You have a shelf of books sorted alphabetically by title. Your mischievous younger sibling takes a few books off the middle of the shelf and puts them back at the end.
// - **The Problem:** You want to quickly figure out if the book order can be returned to its original state by simply shifting a block of books from the end to the front.

