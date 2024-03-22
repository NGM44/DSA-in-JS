// https://leetcode.com/problems/majority-element/solutions/4904148/solution-with-real-life-example-ngm/

var majorityElement = function (nums) {
  //initial hasmmap
  let count = {};
  //loop
  for (const num of nums) {
    count[num] = (count[num] ?? 0) + 1;
    if (count[num] > nums.length / 2) return num;
  }
};

// Boyer Moyer

var majorityElement = function (nums) {
  let count = 0;
  let candidate = undefined;
  for (const num of nums) {
    if (count === 0) candidate = num;
    count += candidate === num ? 1 : -1;
  }
  return candidate;
};

// Sorting

function majorityElement(nums) {
  nums.sort();
  let count = Math.floor(nums.length / 2);
  return nums[count];
}
