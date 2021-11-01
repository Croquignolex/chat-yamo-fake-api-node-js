const {BACKOFFICE_USERS} = require("../data/backoffficeUsers");

// Get backoffice user by login
module.exports.getBackofficeUserByLogin = (login) => {
    // Search
    const needleData = BACKOFFICE_USERS.find(backofficeUser => backofficeUser.login === login);
    // Response
    return needleData
        ? {status: true, data: needleData}
        : {status: false, message: "Back office user nor found"}
}

// Get backoffice user by id
module.exports.getBackofficeUserById = (id) => {
    // Search
    const needleData = BACKOFFICE_USERS.find(backofficeUser => backofficeUser.id.toString() === id.toString());
    // Response
    return needleData
        ? {status: true, data: needleData}
        : {status: false, message: "Back office user nor found"}
}
