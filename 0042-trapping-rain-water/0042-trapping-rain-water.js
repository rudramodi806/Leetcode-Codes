/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (!height || height.length === 0) return 0;
    
    let left = 0, right = height.length - 1;
    let leftMax = height[left], rightMax = height[right];
    let trappedWater = 0;

    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            trappedWater += leftMax - height[left];
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            trappedWater += rightMax - height[right];
        }
    }
    
    return trappedWater;
};
