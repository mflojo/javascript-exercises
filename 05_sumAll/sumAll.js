const sumAll = function(numStart, numEnd) {
    let finalSum = 0;
    if (isNaN(numStart) || isNaN(numEnd)) {
        return "ERROR";
    }
    if (!Number.isInteger(numStart) || !Number.isInteger(numEnd)) {
        return "ERROR";
    }
    if (numStart<0 || numEnd<0) {
        return "ERROR";
    }
    if (numStart === numEnd) {
        return numStart;
    }
    if (numStart > numEnd) {
        let temp = numStart;
        numStart = numEnd;
        numEnd = temp;
    }
    for (let i=numStart; i<=numEnd; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
