const reverseString = function(string) {
    let lastIndex = string.length - 1;
    let reversedString = "";
    for (lastIndex; lastIndex >= 0; lastIndex--) {
        reversedString += string[lastIndex];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
