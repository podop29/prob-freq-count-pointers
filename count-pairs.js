// add whatever parameters you deem necessary
function countPairs(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let results = 0;

    while(start < end){
        if(nums[start] + nums[end] == target) results++;
        start++;
        if(start == end){
            start = 0;
             end-=1;
        } 
        console.log(start, end)

    }
    return results
}

console.log(countPairs([10,4,8,2,6,0], 10))
module.exports = countPairs;