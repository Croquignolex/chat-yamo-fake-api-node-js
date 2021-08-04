const {getUsers, getUserById} = require("../helpers/usersHelper");

// GET: User profile details
module.exports.details = function(req, res) {
    // Params data
    const {userId} = req.params;
    // Fetch backoffice user by login
    const userResponse = getUserById(userId);
    // Response
    if(userResponse.status) res.send(userResponse.data);
    else res.status(400).send({message: userResponse.message});
};

// GET: Users profile
module.exports.users = function(req, res) {
    // Fetch users
    const usersResponse = getUsers();
    // Response
    if(usersResponse.status) res.send(usersResponse.data);
    else res.status(400).send({message: usersResponse.message});
};