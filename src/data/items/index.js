const alcoholAndRefreshmentItems = require('./alcoholAndRefreshments.items');
const animalsItems  = require('./animals.items');
const flowersAndSeedsItems = require('./flowersAndSeeds.items');
// const tools = require('./tools.items');

module.exports = [
    ...alcoholAndRefreshmentItems, 
    ...animalsItems ,
    ...flowersAndSeedsItems ,
    // ...tools,
];