module.exports.MESSAGES = [
    {
        messageId: 1,
        userId: process.env.BACKOFFICE_USER_ID,
        createdAt: new Date().now(),
        authorId: 2,
        content: 'Good morning team Chat&Yamo, i have an issue on my profile picture display.',
        caseId: `1:${process.env.BACKOFFICE_USER_ID}`,
        mediaId: null
    },
    {
        messageId: 2,
        userId: process.env.BACKOFFICE_USER_ID,
        createdAt: new Date().now(),
        authorId: 2,
        content: '',
        caseId: `1:${process.env.BACKOFFICE_USER_ID}`,
        mediaId: 1
    },
    {
        messageId: 3,
        userId: 2,
        createdAt: new Date().now(),
        authorId: process.env.BACKOFFICE_USER_ID,
        content: 'Hi Lili, please can u specify the issue u have on your profile picture display?',
        caseId: `1:${process.env.BACKOFFICE_USER_ID}`,
        mediaId: null
    },
];