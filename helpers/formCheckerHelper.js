// Email address checker
module.exports.emailChecker = function(input) {
    let regex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,6}$/i;
    return regex.test(input);
};

// Required field checker
module.exports.requiredChecker = function(input) {
    return inRange(input, 1, 255)
};

// Private in range checker
const inRange = (input, min = 2, max = 255) => {
    try {
        const length = input.length;
        return (length <= max && length >= min)
    } catch (e) { return false; }
}