// add whatever parameters you deem necessary

function freqCounter(str){
    let obj = {};
    for(char of str){
        obj[char] = (obj[char] + 1) || 1;
    }
    return obj;
}
function constructNote(str1,str2) {
    if(str1 == "") return true;
    if(str2 == "") return false;
    const obj1 =freqCounter(str1);
    const obj2=freqCounter(str2);
    for(let char of str1){
        if(obj1[char] > obj2[char]) return false;
    }
    return true;
}



module.exports = constructNote;
