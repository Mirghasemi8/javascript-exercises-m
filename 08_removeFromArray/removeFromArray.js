const removeFromArray = function(arr, ...theArgs){
    let answer = []
    return arr.filter((i) => !theArgs.includes(i))
}
// Do not edit below this line
module.exports = removeFromArray;
