/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    nums.forEach((item, index) => {
        nums[index] = (item % 2) ? item * 3 : item * 2;
    });
    return nums;
}