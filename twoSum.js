// example inputs
// nums = [2,7,11,15]; target=9;
// nums = [3,2,4]; target=6;
// nums = [3, 3]; target=6;

const twoSum = function(nums, target) {
    const map = new Map();
  
    for(var i = 0; i<nums.length; i++) {
        const num = nums[i];
        if(map.get(num) === undefined) map.set(target-num, i);
        else return [map.get(num), i];
    }
  };