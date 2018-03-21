const { init, ItemContainer, IdentifySoldItems, func } = require('./src');
const { hold, sold, funcmap } = func;

init();

let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    ItemContainer();
    IdentifySoldItems();
    clearInterval(stateCheck);
  }
}, 100);

const items = () => funcmap(hold.list());
const prices = () => funcmap(sold.list());

let itemsLength = items().length;
let pricesLength = prices().length;

setInterval(() => {
  if (itemsLength !== items().length) {
    itemsLength = items().length;
    ItemContainer();
  }
  if (pricesLength !== prices().length) {
    pricesLength = prices().length;
    IdentifySoldItems();
  }
}, 100);
