const sumAll = function(int1, int2) {
    let sum = 0
    let sorted = [int1, int2].sort((a, b) => a - b)
    if (sorted[0] < 0 || !Number.isInteger(sorted[0]) || !Number.isInteger(sorted[1])){
        return "ERROR"
    }
    for (let i = sorted[0] ; i <= sorted[1]; i++){
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
