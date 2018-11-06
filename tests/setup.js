jest.setTimeout(30000);

require('../models/User');

const mongoose = require('mongoose');
const keys = require('../config/keys');

// mongoose wants you to tell it what implementation
// of Promise to use, we use node's
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useMongoClient: true });