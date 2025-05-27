function getSecondLargest(nums) {
    // Complete the function
    let largest, second;
    largest = second = Number.MIN_VALUE;
    for (let i=0; i<nums.length; i++) {
        if (nums[i] > largest) {
            second = largest;
            largest = nums[i];
        } else {
            if (nums[i] > second && nums[i] !== largest)
            second = nums[i]
        }
        }
    return second;
    }
