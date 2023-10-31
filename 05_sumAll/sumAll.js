const sumAll = function(fromNum, toNum) {
    if (fromNum > toNum) {
        let hold = fromNum;
        fromNum = toNum;
        toNum = hold;
    }
    if (fromNum < 0 || toNum < 0 || !Number.isFinite(fromNum) || !Number.isFinite(toNum)) return "ERROR";
    let sum = 0;
    for (fromNum; fromNum <= toNum; fromNum++) {
        sum += fromNum;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
