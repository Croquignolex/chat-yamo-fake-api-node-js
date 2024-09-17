const formCheckerHelper = require("../helpers/formCheckerHelper");
const {
    getUserById,
    getUserMetadataById,
    getUserByEmailOrPhone,
    getUserSouscriptionsById,
    getUserStatusHistoryById
} = require("../helpers/usersHelper");

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

// GET: User metadata details
module.exports.metadata = function(req, res) {
    // Params data
    const {userId} = req.params;
    // Fetch backoffice user by login
    const userResponse = getUserMetadataById(userId);
    // Response
    if(userResponse.status) res.send(userResponse.data);
    else res.status(400).send({message: userResponse.message});
};

// GET: User metadata details
module.exports.status = function(req, res) {
    res.send({deleted: false, blocked: false});
};

// GET: User metadata details
module.exports.exportCVS = function(req, res) {
    res.send();
};

// GET: User souscription history
module.exports.souscriptions = function(req, res) {
    // Params data
    const {userId} = req.params;
    // Fetch backoffice user by login
    const userResponse = getUserSouscriptionsById(userId);
    // Response
    if(userResponse.status) res.send(userResponse.data);
    else res.status(400).send({message: userResponse.message});
};

// GET: User status history
module.exports.history = function(req, res) {
    // Params data
    const {userId} = req.params;
    // Fetch backoffice user by login
    const userResponse = getUserStatusHistoryById(userId);
    // Response
    if(userResponse.status) res.send(userResponse.data);
    else res.status(400).send({message: userResponse.message});
};

// GET: User status history
module.exports.automaticPayment = function(req, res) {
    res.send([
        {
            subscriptionPack: "somesubscriptionPack",
            currency: "Eur",
            amount: "8",
            period: 1,
            startedAt: 100000, // temps en millisecondes et doit être convertie 2024-09-11 12:30
            renewingAt: 200000, // temps en millisecondes et doit être convertie 2024-10-11 12:30
            source: "Stripe"
        }
    ])
};

// POST: Search user by email or phone
module.exports.search = function(req, res) {
    // Form data
    const {attribute} = req.body;
    // Form checker
    if(formCheckerHelper.requiredChecker(attribute)) {
        // Fetch backoffice user by login
        const userResponse = getUserByEmailOrPhone(attribute);
        // Response
        if(userResponse.status) res.send(userResponse.data);
        else res.status(400).send({message: userResponse.message});
    } else res.status(400).send({message: "Form data error"});
};

// POST: Block user profile
module.exports.block = function(req, res) { 
    res.send({status: true, data: null});
};

// GET: User bloack state
module.exports.blockState = function(req, res) {
    // Params data
    const {userId} = req.params;
    // Fetch backoffice user by login
    const userResponse = getUserById(userId);
    // Response
    if(userResponse.status) res.send(userResponse.data);
    else res.status(400).send({message: userResponse.message});
};

// GET: User metadata details
module.exports.appData = function(req, res) {
    res.send({
        status : 'Available',
        deviceType : "Iphone",
        languageCode : 'EN',
        appVersion : '10.23.6',
        release : 'R-251',
        sdkInt : '5935',
        manufacturer : 'Apple',
        model : 'Iphone Xs Mas',
        hardware : 'Iphone Pro',
        device : 'Iphone',
        deviceConsistentId : '26354651654566',
        deviceCountryIsoCode : 'CM',

        maybeSearchCriteria: true,
        gender: "Male",
        minAge: 30,
        maxAge: 65,
        applyAgeFilter: true,
    });
};

// GET: User metadata details
module.exports.lifeStyle = function(req, res) {
    res.send({
        userId: "userid",
        size: "187 cm",
        shape: "En forme",
        wayOfLiving: "Seul",
        activity: "Entrepreneur",
        levelOfEducation: "Baccalauréat",
        childrenNumber: "0",
        lookingFor: "Amour durable",
        smokingLevel: "Pas du tout",
        alcoholLevel: "Juste lors des fêtes",
        religion: "Christianisme",
        language: "Français",
        sizeInCM: 0, // à ignorer
        musicGenre: "Variété,Gospel",
        firstDateBeLike: "Petit budget",
        followingDatesBeLike: "Tout pour ma reine 👸🏽",
        kissMetric: "Aime les bisous",
        aboutFuture: "C'est clair pour moi",
        socialMood: "Aime les sorties",
        children: "Oui; plus",
        travels: "Beaucoup",
        countriesVisited: "Togo,Russie",
        nextCountryToVisit: "Afrique du Sud,Belgique,Ghana",
        interests: "Discussions profondes,Podcast,Développement Personnel,Sape & Élégance,Promenades"
    });
};

// GET: User metadata details
module.exports.customerJourney = function(req, res) {
    res.send({
        currentLevelName: "Nouvel utilisateur",
        currentLevelUsedCredits: 1,
        currentLevelTotalCredits: 1,
        currentLevelActivationDate: "2024-08-22", // peut avoir la valeur ""
        totalUsedCredits: 1,
        totalCredits: 1,
        passedLevels: "NEW DATER, PRO DATER", // peut avoir la valeur ""
        creationDate: "2024-08-22" // peut avoir la valeur ""
    });
};

// GET: User metadata details
module.exports.customerJourney2 = function(req, res) {
    res.send({
        currentLevelName: "Nouvel utilisateur",
        passedAvailableCredits: 3,
        customerJourney: {
            userId: "userId",
            creationDate: "2024-09-11",
            actualLevel: 1,
            levels: [
                {
                    name: "Nouvel utilisateur",
                    startedAt: "2024-09-11T19:44:00.664Z", // format 2024-09-11 19:44"
                    index: 1,
                    credits: [
                        {
                            "requiredAction": "USER_REGISTERED",
                            "requiredActionDone": true,
                            "requiredActionLocalization": {
                                "localizations": [
                                    {
                                        "languageCode": "fr",
                                        "requiredAction": "Nouveau profil",
                                        "requiredActionMessage": "pour t'aider à bien démarrer tu as droit à un crédit pour prendre tes marques!"
                                    }
                                ]
                            },
                            "consumptionCount": 0,
                            "actionCount": 1,
                            "creditCount": 1
                        },
                        {
                            "requiredAction": "PROFILE_CERTIFIED",
                            "requiredActionDone": false,
                            "requiredActionLocalization": {
                                "localizations": [
                                    {
                                        "languageCode": "fr",
                                        "requiredAction": "Validation du profil",
                                        "requiredActionMessage": "Action: Certifies ton profil.\nRécompense: 1 crédit."
                                    }
                                ]
                            },
                            "consumptionCount": 0,
                            "actionCount": 1,
                            "creditCount": 1
                        },
                        {
                            "requiredAction": "APP_REVIEWED",
                            "requiredActionDone": true,
                            "requiredActionLocalization": {
                                "localizations": [
                                    {
                                        "languageCode": "fr",
                                        "requiredAction": "Donne ton feedback",
                                        "requiredActionMessage": "Action: Note et commente l'application.\nRécompense: 1 crédit."
                                    }
                                ]
                            },
                            "consumptionCount": 0,
                            "actionCount": 1,
                            "creditCount": 1
                        }
                    ]
                },
                {
                    "name": "NEW DATER",
                    "index": 2,
                    "credits": [
                        {
                            "requiredAction": "FOLLOWED_ON_FACEBOOK",
                            "requiredActionDone": false,
                            "requiredActionLocalization": {
                                "localizations": [
                                    {
                                        "languageCode": "fr",
                                        "requiredAction": "Rejoins la communauté",
                                        "requiredActionMessage": "Action: Suis nous sur Facebook.\nRécompense: 1 crédit."
                                    }
                                ]
                            },
                            "consumptionCount": 0,
                            "actionCount": 1,
                            "creditCount": 1
                        },
                        {
                            "requiredAction": "APP_SHARED_TO_FRIENDS",
                            "requiredActionDone": false,
                            "requiredActionLocalization": {
                                "localizations": [
                                    {
                                        "languageCode": "fr",
                                        "requiredAction": "Invite des ami.es",
                                        "requiredActionMessage": "Action: Partage l'app à au moins 10 ami.es.\nRécompense: 2 crédits."
                                    }
                                ]
                            },
                            "consumptionCount": 0,
                            "actionCount": 10,
                            "creditCount": 2
                        }
                    ]
                },
                {
                    "name": "PRO DATER",
                    "index": 3,
                    "credits": [
                        {
                            "restrictedBenefit": "POST_USER_AD",
                            "requiredAction": "THREE_WEEKS_RETENTION",
                            "requiredActionDone": false,
                            "requiredActionLocalization": {
                                "localizations": [
                                    {
                                        "languageCode": "fr",
                                        "requiredAction": "Pro Dater",
                                        "requiredActionMessage": "bravo, au niveau pro dater tu as droit à une annonce vidéo pour faire des rencontres authentiques grâce au speed vidéo dating!"
                                    }
                                ]
                            },
                            "consumptionCount": 0,
                            "actionCount": 1,
                            "creditCount": 1
                        },
                        {
                            "restrictedBenefit": "VIDEO_DATE",
                            "requiredAction": "USER_AD_POSTED",
                            "requiredActionDone": true,
                            "requiredActionLocalization": {
                                "localizations": [
                                    {
                                        "languageCode": "fr",
                                        "requiredAction": "Annonce vidéo",
                                        "requiredActionMessage": "Action: Poste une annonce video.\nRécompense: 3 crédits pour Vidéo Date."
                                    }
                                ]
                            },
                            "consumptionCount": 0,
                            "actionCount": 1,
                            "creditCount": 3
                        },
                        {
                            "requiredAction": "PROFILE_VIDEO_POSTED",
                            "requiredActionDone": false,
                            "requiredActionLocalization": {
                                "localizations": [
                                    {
                                        "languageCode": "fr",
                                        "requiredAction": "Partage ton style de vie",
                                        "requiredActionMessage": "Action: Poste une video sur ton profil.\nRécompense: 1 crédit."
                                    }
                                ]
                            },
                            "consumptionCount": 0,
                            "actionCount": 1,
                            "creditCount": 1
                        }
                    ]
                },
                {
                    "name": "PRO DATER ++",
                    "index": 4,
                    "credits": [
                        {
                            "restrictedBenefit": "DISCOUNT_OR_CREDIT",
                            "requiredAction": "REFERRAL_PAID",
                            "requiredActionDone": true,
                            "requiredActionLocalization": {
                                "localizations": [
                                    {
                                        "languageCode": "fr",
                                        "requiredAction": "Promotion",
                                        "requiredActionMessage": "Action: Parraine un.e ami.e à souscrire à un abonnement.\nRécompense: 1 crédit ou une reduction sur un de nos abonnements."
                                    }
                                ]
                            },
                            "consumptionCount": 0,
                            "actionCount": 1,
                            "creditCount": 1
                        },
                        {
                            "restrictedBenefit": "VIDEO_DATING_PARTY",
                            "requiredAction": "REFERRAL_REGISTERED",
                            "requiredActionDone": true,
                            "requiredActionLocalization": {
                                "localizations": [
                                    {
                                        "languageCode": "fr",
                                        "requiredAction": "Parrainage",
                                        "requiredActionMessage": "Action: Parraine un.e ami.e à s'inscrire.\nRécompense: 1 crédit."
                                    }
                                ]
                            },
                            "consumptionCount": 0,
                            "actionCount": 1,
                            "creditCount": 1
                        }
                    ]
                }
            ]
        }
    });
};