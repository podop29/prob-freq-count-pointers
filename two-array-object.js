// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    let obj = {};
    let idx = 0;
    for(let key of keys){
        if(values[idx]){
            obj[key] = values[idx]
            idx++;
        }else{
            obj[key] = null;
            idx++;
        }
    }
    return obj;
}

module.exports = twoArrayObject;
