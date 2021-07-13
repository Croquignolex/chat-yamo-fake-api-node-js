const http = require('http');
const cors = require('cors');
const express = require('express');
// const socketIO = require('socket.io');
const bodyParser = require('body-parser');

// Constants
const {TOKEN} = require('./constants/generalConstants');
const {
    FEEDBACK_SERVICE_ROUTES_PATH,
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
    allowedHeaders: "Accept,Content-Type,Accept-Charset,Authorization",
    optionsSuccessStatus: 200,
    methods: "GET,PUT,POST",
    exposedHeaders: TOKEN,
    "origin": "*",
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Routes
const authRoutes = require('./routes/auth');
const feedbackRoutes = require('./routes/feedback');

// Setting general model route
router.use('', authRoutes);
router.use(FEEDBACK_SERVICE_ROUTES_PATH, feedbackRoutes);

// Append /api for our http requests
app.use('/service', router);

// Init server (for socket to listen)
const server = http.createServer(app);
// const io = socketIO.listen(server);

/*
// Controllers
const {liveMethod} = require('./controllers/liveController');

// Bring live methods
io.on('connection', (socket) => {
    liveMethod(socket);
});
 */

// Server listening request port
const appPort = process.env.SERVER_PORT || 4000;

// Express server listen
server.listen(appPort, () => console.log(`LISTENING ON PORT ${appPort}`));