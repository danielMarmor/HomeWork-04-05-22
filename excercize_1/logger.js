const url = 'http://mylogger.io/log'

function log(message){
    console.log(`Logging: ${message}`);
}

function error(message){
    console.error(`Error: ${message}`);
}

module.exports.log = log;
module.exports.error = error;
module.exports.end_opint = url

