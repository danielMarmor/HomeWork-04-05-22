const EventEmmiter = require('events');
const zeroLenghtEmmiter = new EventEmmiter();

const logger = require('./logger')

zeroLenghtEmmiter.on('empty_array', (_) =>{
    logger.error('Array is Empty!');
});
const getLength = array =>{
    return array.length;
}

const getFirst = array =>{
    var arrayLength = getLength(array);
    if (arrayLength == 0){
       zeroLenghtEmmiter.emit('empty_array');
       return null;
    }
    let item = array[0];
    return item;
}
const getLast = array =>{
    var arrayLength = getLength(array);
    if (arrayLength == 0){
        zeroLenghtEmmiter.emit('empty_array');
        return null;
    }
    let item = array[arrayLength - 1];
    return item;
}

module.exports.getLength = getLength;
module.exports.getFirst = getFirst;
module.exports.getLast = getLast;