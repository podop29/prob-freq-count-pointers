// add whatever parameters you deem necessary
function averagePair(arr, targetAverage) {
    let p1 = 0
    let p2 = arr.length - 1

    while(p1 <  p2){
        let currAvg = (arr[p1] + arr[p2]) / 2;
        if(currAvg == targetAverage) return true;
        if(currAvg < targetAverage) p1++;
        if(currAvg > targetAverage) p2--;
    }
    return false;

}

module.exports = averagePair;
