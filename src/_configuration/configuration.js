const dotenv = require('dotenv');

// Read configuration      
dotenv.config();

// Configuration object to export
let config = module.exports = {};

// Argument passed to node when starting app
config.env = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV === 'development'){
    config.port = process.env.PORT || 3000;
    config.ip = process.env.IP || 'localhost';
    config.timeout = process.env.SERVER_REQ_TIMEOUT || 30000;
    config.maxPayload = process.env.MAX_PAYLOAD || '100kb';
    config.rootPath = process.env.NODE_PATH; 
} else {
    config.port = process.env.PORT || 3000;
    config.ip = process.env.IP || '0.0.0.0';
    config.timeout = process.env.SERVER_REQ_TIMEOUT || 60000;
    config.maxPayload = process.env.MAX_PAYLOAD || '500kb';
    config.rootPath = process.env.NODE_PATH;
}

