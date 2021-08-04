const {OPEN} = require("../constants/generalConstants");

module.exports.CASES = [
    {
        caseId: `1:${process.env.BACKOFFICE_USER_ID}`,
        userId: 1,
        name: "Good morning team Chat&Yamo, i have an issue on my profile picture display.",
        createdAt: new Date().now().createdAt,
        status: OPEN,
        closedAt: null
    }
];