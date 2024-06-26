const http = require('http');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

// Constants
const {
    MEDIA_SERVICE_ROUTES_PATH,
    USERS_SERVICE_ROUTES_PATH,
    FEEDBACKS_SERVICE_ROUTES_PATH,
    NOTIFICATION_SERVICE_ROUTES_PATH,
    AUTHENTICATION_SERVICE_ROUTES_PATH,
    BACKOFFICE_USERS_SERVICE_ROUTES_PATH,
    CHATROOM_SERVICE_ROUTES_PATH,
    PROPOSAL_SERVICE_ROUTES_PATH
} = require('./constants/pathConstants');

// .env config
require('dotenv').config();

// Init express server
const app = express();

// Express router init
const router = express.Router();

// Middleware
const corsOptions = {
    // Authorized header to the client
    allowedHeaders: "*",
    optionsSuccessStatus: 200,
    methods: "GET,PUT,POST,DELETE",
    "origin": "*",
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Routes
const mediaRoutes = require('./routes/media');
const usersRoutes = require('./routes/users');
const chatroomRoutes = require('./routes/chatroom');
const chatroom2Routes = require('./routes/chatroom2');
const feedbacksRoutes = require('./routes/feedbacks');
const validationRoutes = require('./routes/validation');
const notificationRoutes = require('./routes/notification');
const authenticationRoutes = require('./routes/authentication');
const backofficeUsersRoutes = require('./routes/backofficeUsers');
const proposalRoutes = require('./routes/proposal');

// Setting general model route
router.use(MEDIA_SERVICE_ROUTES_PATH, mediaRoutes);
router.use(USERS_SERVICE_ROUTES_PATH, usersRoutes);
router.use(MEDIA_SERVICE_ROUTES_PATH, validationRoutes);
router.use(FEEDBACKS_SERVICE_ROUTES_PATH, chatroomRoutes);
router.use(CHATROOM_SERVICE_ROUTES_PATH, chatroom2Routes);
router.use(PROPOSAL_SERVICE_ROUTES_PATH, proposalRoutes);
router.use(FEEDBACKS_SERVICE_ROUTES_PATH, feedbacksRoutes);
router.use(NOTIFICATION_SERVICE_ROUTES_PATH, notificationRoutes);
router.use(AUTHENTICATION_SERVICE_ROUTES_PATH, authenticationRoutes);
router.use(BACKOFFICE_USERS_SERVICE_ROUTES_PATH, backofficeUsersRoutes);

// Append /api for our http requests
app.use('/service', router);

// For static files
app.use('/medias', express.static('medias'));

// Init server (for socket to listen)
const server = http.createServer(app);

// Server listening request port
const appPort = process.env.SERVER_PORT || 4000;

// Express server listen
server.listen(appPort, () => console.log(`LISTENING ON PORT ${appPort}`));
