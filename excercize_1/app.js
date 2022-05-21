const logger = require('./logger');
const EventEmmiter = require('events');
const filesystem = require('fs');
const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});
//# 1
readline.question('Enter File Name: ', filename =>{
    let isExistFile = filesystem.existsSync(filename);
    if (isExistFile){
        logger.log(`File ${filename} exists!`);
    }
    else{
        logger.log(`File ${filename} not exists!`);
    }
    readline.close();
})

// # 2
const statistics = require('./statistics');

const array = [];
const {getLength, getFirst, getLast} = statistics;

let length = getLength(array);
let firstItem = getFirst(array);
let lastItem= getLast(array);

logger.log(`Lenght=${length}`);
logger.log(`First Item=${firstItem}`);
logger.log(`Last Item=${lastItem}`);









const uppercase_emmiter =new EventEmmiter();
const lowercase_emmiter =new EventEmmiter();

