// add whatever parameters you deem necessary
function checkFrequecny(int){
    obj={};
    int = int.toString()
    for(let d of int){
        obj[d] = (obj[d] + 1) || 1
    }
    return obj;
}

function sameFrequency(int1, int2) {
    let int1str = int1.toString();
    let int2str = int2.toString();
    if(int1str.length != int2str.length) return false


    const obj1 = checkFrequecny(int1);
    const obj2 = checkFrequecny(int2);
    for(let char of int1str){
        if(obj1[char] != obj2[char]) return false
    }
    return true

}

module.exports = sameFrequency