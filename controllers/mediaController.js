const {getUserMainImageById} = require("../helpers/mediasHelper");

// GET: User main image
module.exports.userMainImage = async function(req, res) {
    // Params data
    const {userId} = req.params;
    // Fetch backoffice user by login
    const imageResponse = await getUserMainImageById(userId);
    // Response
    if(imageResponse.status) res.send(imageResponse.data);
    else res.status(400).send({message: imageResponse.message});
};
