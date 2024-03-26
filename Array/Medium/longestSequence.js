/**
 * @param {number[]} nums
 * @return {number}
 */

const linearSearch = function (arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (num + 1 === arr[i]) return true;
  }
  return false;
};
var longestConsecutive = function (nums) {
  let longest = 0;
  for (let i = 0; i < nums.length; i++) {
    numberValue = nums[i];
    count = 1;
    while (linearSearch(nums, numberValue)) {
      count++;
      numberValue += 1;
    }

    longest = Math.max(count, longest);
  }

  return longest;
};

var longestConsecutiveUsingSet = function (nums) {
  if (nums.length === 0) return 0;
  let arr = new Set(nums);
  let longest = 1;
  for (let num of nums) {
    count = 1;
    currentNumber = num + 1;
    if (!arr.has(num - 1)) {
      while (arr.has(currentNumber)) {
        currentNumber++;
        count += 1;
      }
      longest = Math.max(longest, count);
    }
  }
  return longest;
};
