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
        mediaId: 3
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
        messageId: 5,
        userId: process.env.BACKOFFICE_USER_ID,
        createdAt: new Date().getTime(),
        authorId: 3,
        content: "Hello, my name is Ema and i am new.",
        caseId: `3:${process.env.BACKOFFICE_USER_ID}`,
        mediaId: ''
    },
    {
        messageId: 6,
        userId: process.env.BACKOFFICE_USER_ID,
        createdAt: new Date().getTime(),
        authorId: 4,
        content: "Hey! some idiot came and suspend one of my match.",
        caseId: `4:${process.env.BACKOFFICE_USER_ID}`,
        mediaId: ''
    },
    {
        messageId: 7,
        userId: 4,
        createdAt: new Date().getTime(),
        authorId: process.env.BACKOFFICE_USER_ID,
        content: "Hi, please be polite or we will be forced ti delete your account",
        caseId: `4:${process.env.BACKOFFICE_USER_ID}`,
        mediaId: ''
    },
    {
        messageId: 8,
        userId: process.env.BACKOFFICE_USER_ID,
        createdAt: new Date().getTime(),
        authorId: 4,
        content: "Do what u want, stupid.",
        caseId: `4:${process.env.BACKOFFICE_USER_ID}`,
        mediaId: ''
    }
];