var twoSum = function(nums, target) {
  const indexMap = {};

  for (let i = 0; i <= nums.length - 1; i++) {
    let complement = target - nums[i];

    if (indexMap.hasOwnProperty(complement)) {
      return [indexMap[complement], i]
    }

    indexMap[nums[i]] = i;
  }
};

const nums1 = [2, 5, 0, 7];
const target1 = 9;

console.log(twoSum(nums1, target1));