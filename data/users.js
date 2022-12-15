module.exports.USERS = [
    {
        userId: 1,
        blocked: false,
        name: 'Alex MONKAM',
        age: 20,
        gender: 'Male',
        city: 'DOUALA',
        country: 'CAMEROON',
        continent: 'AFRICA',
        greetingText: 'Welcome Alex',
        province: 'LITTORAL',
        homeCountry: 'CAMEROON',
        verified: true,
        isPremium: true,
        phone: "691503072",
        subscriptionEnd: new Date("December 14, 2021 04:24:00").getTime(),
        metadata: {
            identifier: '691503072',
            oldPhoneNumber: '691503072',
            createdAt: new Date("December 14, 2021 04:24:00").getTime()
        },
        souscriptions: [
            {
                subscriptionType: 'SOLO', 
                subscriptionStart: new Date("December 14, 2021 04:24:00").getTime(), 
                subscriptionEnd: new Date("December 24, 2021 04:24:00").getTime()
            },
            {
                subscriptionType: 'PREMIUM', 
                subscriptionStart: new Date("December 10, 2021 04:24:00").getTime(), 
                subscriptionEnd: new Date("December 30, 2021 04:24:00").getTime()
            },
            {
                subscriptionType: 'MuLTIPLE', 
                subscriptionStart: new Date("December 04, 2021 04:24:00").getTime(), 
                subscriptionEnd: new Date("December 14, 2021 04:24:00").getTime()
            },
        ],
        history: [
            {
                status: 'deleted',
                note: "Exemple note 1",
                createdAt: "2022-10-09 18:52"
            },
            {
                status: 'bloqued',
                note: "Exemple note 2",
                createdAt: "2022-10-09 18:52"
            },
        ]
    },
    {
        userId: 2,
        name: 'Lili NANA',
        blocked: false,
        age: 18,
        gender: 'Female',
        city: 'YAOUNDE',
        country: 'CAMEROON',
        continent: 'AFRICA',
        greetingText: 'Welcome Lili',
        province: 'CENTER',
        homeCountry: 'CAMEROON',
        verified: true,
        isPremium: false,
        email: "gpetitalex10@gmail.com",
        subscriptionEnd: "",
        metadata: {
            identifier: 'gpetitalex10@gmail.com',
            oldPhoneNumber: '691503072',
            createdAt: new Date("December 14, 2021 04:24:00").getTime()
        },
        souscriptions: [
            {
                subscriptionType: 'MuLTIPLE', 
                subscriptionStart: new Date("December 04, 2020 04:24:00").getTime(), 
                subscriptionEnd: new Date("December 14, 2020 04:24:00").getTime()
            },
        ],
        history: [
            {
                status: 'deleted',
                note: "Exemple note 1",
                createdAt: "2022-10-09 18:52"
            },
            {
                status: 'bloqued',
                note: "Exemple note 2",
                createdAt: "2022-10-09 18:52"
            },
        ]
    },
    {
        userId: 3,
        blocked: true,
        name: 'Ema KONDE',
        age: 22,
        gender: 'Female',
        city: 'DJAMENA',
        country: 'TCHAD',
        continent: 'AFRICA',
        greetingText: 'Welcome Ema',
        province: 'DJAMENA',
        homeCountry: 'TCHAD',
        verified: false,
        isPremium: false,
        subscriptionEnd: "",
        metadata: {
            identifier: 'gpetitalex10@gmail.com',
            oldPhoneNumber: '691503072',
            createdAt: new Date("December 14, 2021 04:24:00").getTime()
        },
        souscriptions: [
            {
                subscriptionType: 'SOLO', 
                subscriptionStart: new Date("December 14, 2021 04:24:00").getTime(), 
                subscriptionEnd: new Date("December 15, 2021 04:24:00").getTime()
            }
        ],
        history: [
            {
                status: 'deleted',
                note: "Exemple note 1",
                createdAt: "2022-10-09 18:52"
            },
            {
                status: 'bloqued',
                note: "Exemple note 2",
                createdAt: "2022-10-09 18:52"
            },
        ]
    },
    {
        userId: 4,
        blocked: true,
        name: 'chat_yamo_deleted_account',
        age: 0,
        gender: '',
        city: '',
        country: '',
        continent: '',
        greetingText: '',
        province: '',
        homeCountry: '',
        verified: false,
        isPremium: false,
        subscriptionEnd: "",
        metadata: {
            identifier: 'gpetitalex10@gmail.com',
            oldPhoneNumber: '691503072',
            createdAt: new Date("December 14, 2021 04:24:00").getTime()
        },
        souscriptions: [
            {
                subscriptionType: 'SOLO', 
                subscriptionStart: new Date("December 03, 2020 04:24:00").getTime(), 
                subscriptionEnd: new Date("December 04, 2020 04:24:00").getTime()
            },
            {
                subscriptionType: 'PREMIUM', 
                subscriptionStart: new Date("December 10, 2020 04:24:00").getTime(), 
                subscriptionEnd: new Date("December 11, 2020 04:24:00").getTime()
            },
            {
                subscriptionType: 'MuLTIPLE', 
                subscriptionStart: new Date("December 04, 2020 04:24:00").getTime(), 
                subscriptionEnd: new Date("December 05, 2020 04:24:00").getTime()
            },
        ],
        history: [
            {
                status: 'deleted',
                note: "Exemple note 1",
                createdAt: "2022-10-09 18:52"
            },
            {
                status: 'bloqued',
                note: "Exemple note 2",
                createdAt: "2022-10-09 18:52"
            },
        ]
    },
    {
        userId: 5,
        blocked: false,
        name: 'Grace MINKO',
        age: 26,
        gender: 'Female',
        city: 'PARIS',
        country: 'FRANCE',
        continent: 'AFRICA',
        greetingText: 'Welcome Grace',
        province: 'PARIS',
        homeCountry: 'FRANCE',
        verified: false,
        isPremium: true,
        subscriptionEnd: new Date("December 20, 2020 04:24:00").getTime(),
        metadata: {
            identifier: 'gpetitalex10@gmail.com',
            oldPhoneNumber: '691503072',
            createdAt: new Date("December 14, 2021 04:24:00").getTime()
        },
        souscriptions: [
            {
                subscriptionType: 'SOLO', 
                subscriptionStart: new Date("December 19, 2021 04:24:00").getTime(), 
                subscriptionEnd: new Date("December 31, 2021 04:24:00").getTime()
            },
            {
                subscriptionType: 'MuLTIPLE', 
                subscriptionStart: new Date("December 22, 2021 04:24:00").getTime(), 
                subscriptionEnd: new Date("December 23, 2021 04:24:00").getTime()
            },
        ],
        history: [
            {
                status: 'deleted',
                note: "Exemple note 1",
                createdAt: "2022-10-09 18:52"
            },
            {
                status: 'bloqued',
                note: "Exemple note 2",
                createdAt: "2022-10-09 18:52"
            },
        ]
    },
    {
        userId: 6,
        blocked: false,
        name: 'Sweet BEANS',
        age: 36,
        gender: 'Female',
        city: 'NEW YORK',
        country: 'USA',
        continent: 'AMERICA',
        greetingText: 'Welcome Sweet',
        province: 'NEW YORK',
        homeCountry: 'USA',
        verified: true,
        isPremium: true,
        subscriptionEnd: new Date("December 18, 2021 04:24:00").getTime(),
        metadata: {
            identifier: 'gpetitalex10@gmail.com',
            oldPhoneNumber: '691503072',
            createdAt: new Date("December 14, 2021 04:24:00").getTime()
        },
        souscriptions: [
            {
                subscriptionType: 'SOLO', 
                subscriptionStart: new Date("December 15, 2021 04:24:00").getTime(), 
                subscriptionEnd: new Date("December 28, 2021 04:24:00").getTime()
            },
            {
                subscriptionType: 'PREMIUM', 
                subscriptionStart: new Date("December 01, 2021 04:24:00").getTime(), 
                subscriptionEnd: new Date("December 22, 2021 04:24:00").getTime()
            },
        ],
        history: [
            {
                status: 'deleted',
                note: "Exemple note 1",
                createdAt: "2022-10-09 18:52"
            },
            {
                status: 'bloqued',
                note: "Exemple note 2",
                createdAt: "2022-10-09 18:52"
            },
        ]
    },
    {
        userId: 7,
        blocked: true,
        name: 'Danger MAN',
        age: 17,
        gender: 'Male',
        city: 'TOKYO',
        country: 'JAPAN',
        continent: 'ASIA',
        greetingText: 'Welcome Danger',
        province: 'TOKYO',
        homeCountry: 'JAPAN',
        verified: true,
        isPremium: true,
        subscriptionEnd: new Date("December 29, 2021 04:24:00").getTime(),
        metadata: {
            identifier: 'gpetitalex10@gmail.com',
            oldPhoneNumber: '691503072',
            createdAt: new Date("December 14, 2021 04:24:00").getTime()
        },
        souscriptions: [ 
            {
                subscriptionType: 'PREMIUM', 
                subscriptionStart: new Date("December 08, 2021 04:24:00").getTime(), 
                subscriptionEnd: new Date("December 22, 2021 04:24:00").getTime()
            },
            {
                subscriptionType: 'MuLTIPLE', 
                subscriptionStart: new Date("December 09, 2021 04:24:00").getTime(), 
                subscriptionEnd: new Date("December 15, 2021 04:24:00").getTime()
            },
        ],
        history: [
            {
                status: 'deleted',
                note: "Exemple note 1",
                createdAt: "2022-10-09 18:52"
            },
            {
                status: 'bloqued',
                note: "Exemple note 2",
                createdAt: "2022-10-09 18:52"
            },
        ]
    }
];
