 const rotate = (nums, k) => {
    const s = nums.splice(0, nums.length - (k%nums.length));
    nums.push(...s)
};