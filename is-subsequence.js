// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let start = str2.indexOf(str1[0]);
    let idx = 0;

    for(let i = start; i < str2.length; i++){
        if(str2[i] == str1[idx]){
            start = i;
            idx++
        } 
    if(idx == str1.length) return true;
    }
    return false;
}

module.exports = isSubsequence;
