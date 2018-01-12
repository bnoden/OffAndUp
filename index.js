const { init, ItemContainer, IdentifySoldItems } = require('./src');

init();

let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    ItemContainer();
    IdentifySoldItems();
    clearInterval(stateCheck);
  }
}, 100);

const items = () => document.querySelectorAll('.vertical-middle');
const prices = () => document.querySelectorAll('.item-info-price');
let itemsLength = items().length;
let pricesLength = prices().length;

setInterval(() => {
  if (itemsLength !== items().length) {
    itemsLength = items().length;
    ItemContainer();
  }
  if (pricesLength !== prices().length) {
    pricesLength = items().length;
    IdentifySoldItems();
  }
}, 100);
