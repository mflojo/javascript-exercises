const removeFromArray = function(array, ...args) {
    let finalArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            finalArray.push(item);
        }
    });
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
