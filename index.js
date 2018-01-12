const { ItemContainer, IdentifySoldItems } = require('./src');

let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    setItemPage();
    identifySoldItems();
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
    setItemPage();
  }
  if (pricesLength !== prices().length) {
    pricesLength = items().length;
    identifySoldItems();
  }
}, 100);
