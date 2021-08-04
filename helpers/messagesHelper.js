const {MESSAGES} = require("../data/messages");

// Get messages
module.exports.getMessages = () => {
    return {status: true, data: MESSAGES};
}