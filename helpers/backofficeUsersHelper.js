const {BACKOFFICE_USERS} = require("../data/backoffficeUsers");
const {BACKOFFICE_USER_NOT_FOUND} = require("../constants/reponseConstants");

// Get backoffice user by login
module.exports.getBackofficeUserByLogin = (login) => {
    // Search
    const needleData = BACKOFFICE_USERS.find(backofficeUser => backofficeUser.login === login);
    // Response
    return needleData
        ? {status: true, data: needleData}
        : {status: false, message: BACKOFFICE_USER_NOT_FOUND}
}
