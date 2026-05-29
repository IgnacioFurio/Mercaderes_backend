const alcoholAndRefreshmentItems = require('./alcoholAndRefreshments.items');
const animalsItems  = require('./animals.items');
const booksAndMapsItems = require('./booksAndMaps.items');
const flowersAndSeedsItems = require('./flowersAndSeeds.items');
const foodAndAnimalProductsItems = require('./foodAndAnimalsProducts.items');
const furnitureAndInteriorDecorItems = require('./furnitureAndInteriorDecor.items');
const highFashionItems = require('./highFashion.items');
const jewelryAndGemsItems = require('./jewelryAndGems.items');
const knickKnacksItems = require('./knickKnacks.items');
const leatherworkingItems = require('./leatherworking.items');
// const tools = require('./tools.items');

module.exports = [
    ...alcoholAndRefreshmentItems, 
    ...animalsItems ,
    ...booksAndMapsItems,
    ...flowersAndSeedsItems,
    ...foodAndAnimalProductsItems,
    ...furnitureAndInteriorDecorItems,
    ...highFashionItems,
    ...jewelryAndGemsItems,
    ...knickKnacksItems,
    ...leatherworkingItems,
    // ...tools,
];