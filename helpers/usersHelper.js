const {USERS} = require("../data/users");
const {USER_NOT_FOUND} = require("../constants/reponseConstants");

// Get: users
module.exports.getUsers = () => {
    return {status: true, data: USERS};
}

// Get: user by id
module.exports.getUserById = (id) => {
    // Search
    const needleData = USERS.find(user => user.id === parseInt(id));
    // Response
    return needleData
        ? {status: true, data: needleData}
        : {status: false, message: USER_NOT_FOUND}
}