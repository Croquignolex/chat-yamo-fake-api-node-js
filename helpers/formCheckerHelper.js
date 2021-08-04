// Required field checker
module.exports.requiredChecker = function(input) {
    return input.toString().length > 0;
};