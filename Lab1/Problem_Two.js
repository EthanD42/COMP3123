




function largestInt(nums){
    if (nums.length === 0) return null;
    
    let largest = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }
    
    return largest;
}

console.log(largestInt([3, 7, 20, 0, 1000, 9, 4]));