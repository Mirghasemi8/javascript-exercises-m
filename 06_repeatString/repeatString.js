const repeatString = function(str, num) {
    if (num < 0) return "ERROR"
    answer = ""
    for (let i = num; i > 0; i--){
        answer += str
    }
    return answer
};

// Do not edit below this line
module.exports = repeatString;
