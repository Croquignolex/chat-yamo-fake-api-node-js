const {USERS} = require("../data/users");

// Get users
module.exports.getUsers = () => {
    return {status: true, data: USERS};
}

// Get user by id
module.exports.getUserById = (id) => {
    // Search
    const needleData = USERS.find(user => user.userId === parseInt(id));
    // Response
    return needleData
        ? {status: true, data: needleData}
        : {status: false, message: "user nor found"}
}
