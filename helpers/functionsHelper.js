const moment = require('moment-timezone');
const {JS_DATE_FORMAT} = require("../constants/generalConstants");

// Convert API date to string
module.exports.mysqlDateForResponse = function(date, timezone ='UTC') {
    return date && moment(date).tz(timezone).format(JS_DATE_FORMAT);
}