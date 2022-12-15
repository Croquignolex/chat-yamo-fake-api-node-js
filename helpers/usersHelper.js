const {USERS} = require("../data/users");

// Get users
module.exports.getUsers = () => {
    return {status: true, data: USERS};
}

// Get user by id
module.exports.getUserById = (id) => {
    // Search
    const needleData = USERS.find(user => user.userId === parseInt(id));
    if(needleData) {
        const returnedUser = {
            ...needleData,
            userId: (needleData.name !== "chat_yamo_deleted_account") ? needleData.userId : ""
        }
        return {status: true, data: returnedUser}
    }
    // Response
    return {status: false, message: "user nor found"};
}

// Get user metadata by id
module.exports.getUserMetadataById = (id) => {
    // Search
    const needleData = USERS.find(user => user.userId === parseInt(id));
    if(needleData) {
        return {status: true, data: needleData?.metadata}
    }
    // Response
    return {status: false, message: "user nor found"};
}

// Get user souscriptions by id
module.exports.getUserSouscriptionsById = (id) => {
    // Search
    const needleData = USERS.find(user => user.userId === parseInt(id));
    if(needleData) {
        return {status: true, data: needleData?.souscriptions}
    }
    // Response
    return {status: false, message: "user nor found"};
}

// Get user status history by id
module.exports.getUserStatusHistoryById = (id) => {
    // Search
    const needleData = USERS.find(user => user.userId === parseInt(id));
    if(needleData) {
        return {status: true, data: needleData?.status}
    }
    // Response
    return {status: false, message: "user nor found"};
}

// Get user by phone or email
module.exports.getUserByEmailOrPhone = (attr) => {
    // Search
    const needleData = USERS.find(user => (user.email === attr || user.phone === attr));
    if(needleData) {
        const returnedUser = {
            ...needleData,
            userId: (needleData.name !== "chat_yamo_deleted_account") ? needleData.userId : ""
        }
        return {status: true, data: returnedUser}
    }
    // Response
    return {status: false, message: {userId: "empty_user_id"}};
}
