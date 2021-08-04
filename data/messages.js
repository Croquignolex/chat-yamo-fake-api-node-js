module.exports.MESSAGES = [
    {
        messageId: 1,
        userId: process.env.BACKOFFICE_USER_ID,
        createdAt: new Date().getTime(),
        authorId: 2,
        content: 'Good morning team Chat&Yamo, i have an issue on my profile picture display.',
        caseId: `2:${process.env.BACKOFFICE_USER_ID}`,
        mediaId: ''
    },
    {
        messageId: 2,
        userId: process.env.BACKOFFICE_USER_ID,
        createdAt: new Date().getTime(),
        authorId: 2,
        content: '',
        caseId: `2:${process.env.BACKOFFICE_USER_ID}`,
        mediaId: 1
    },
    {
        messageId: 3,
        userId: 2,
        createdAt: new Date().getTime(),
        authorId: process.env.BACKOFFICE_USER_ID,
        content: 'Hi Lili, please can you specify the issue you have on your profile picture display?',
        caseId: `2:${process.env.BACKOFFICE_USER_ID}`,
        mediaId: ''
    },
    {
        messageId: 4,
        userId: process.env.BACKOFFICE_USER_ID,
        createdAt: new Date().getTime(),
        authorId: 1,
        content: "Hello team Chat&Yamo, i can't no more match with other members.",
        caseId: `1:${process.env.BACKOFFICE_USER_ID}`,
        mediaId: ''
    }
];