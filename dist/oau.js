(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./src":4}],2:[function(require,module,exports){
module.exports.IdentifySoldItems = price => {
  price = document.querySelectorAll('.item-info-price');
  for (let item in price) {
    if (price[item].innerText === 'SOLD') {
      // Make sold items visible while obvious that they're not available
      price[item].parentNode.parentNode.parentNode.style.opacity = 0.25;
    }
  }
};

},{}],3:[function(require,module,exports){
const {
  btnClose,
  btnClose_bgColor,
  bufferLayer,
  itemContainer,
  itemFrame,
  itemURL,
  urlDisplay
} = require('../init');

module.exports.ItemContainer = () => {
  const itemPic = document.querySelectorAll('.vertical-middle');

  for (let i in itemPic) {
    itemPic[i].onclick = event => {
      event.preventDefault();
      itemFrame.src = itemPic[i].parentNode.href;
      itemURL.href = itemFrame.src;
      itemURL.target = '_blank';
      itemURL.innerText = itemFrame.src;
      urlDisplay.appendChild(itemURL);
      btnClose.innerText = 'close [x]';
      urlDisplay.appendChild(btnClose);
      appendLayers();

      const urlHref = urlDisplay.querySelector('a');
      const hrefColor = '#0f94a8';
      urlHref.style.color = hrefColor;
      urlHref.style.textDecoration = 'none';

      urlHref.onmouseover = () => (urlHref.style.color = '#01505C');
      urlHref.onmouseleave = () => (urlHref.style.color = hrefColor);

      openItemContainer();
      btnClose.onclick = () => closeItemContainer();
    };
  }
};

},{"../init":5}],4:[function(require,module,exports){
const { init } = require('./init');
const { ItemContainer } = require('./ItemContainer');
const { IdentifySoldItems } = require('./IdentifySoldItems');

module.exports = { init, ItemContainer, IdentifySoldItems };

},{"./IdentifySoldItems":2,"./ItemContainer":3,"./init":5}],5:[function(require,module,exports){
const itemContainer = document.createElement('div');
const bufferLayer = document.createElement('div');
const itemFrame = document.createElement('iframe');
const urlDisplay = document.createElement('p');
const itemURL = document.createElement('a');
const btnClose = document.createElement('button');
const btnClose_bgColor = '#C94949';

const init = () => {
  urlDisplay.style.margin = '0px';
  urlDisplay.style.padding = '0px';
  urlDisplay.style.fontSize = '20px';
  urlDisplay.style.fontWeight = '600';

  btnClose.style.backgroundColor = btnClose_bgColor;

  btnClose.style.color = '#FFF5F5';
  btnClose.style.userSelect = 'none';
  btnClose.style.position = 'absolute';
  btnClose.style.right = '24px';
  btnClose.style.width = '100px';
  btnClose.style.height = '40px';
  btnClose.style.fontSize = '20px';
  btnClose.style.borderColor = '#C94949';
  btnClose.style.borderRadius = '8px';
  btnClose.style.borderWidth = '2px';
  btnClose.style.opacity = 0.9;

  itemContainer.style.width = '80vw';
  itemContainer.style.height = '80vh';
  itemContainer.style.top = '10vh';
  itemContainer.style.left = '10vw';
  itemContainer.style.position = 'fixed';
  itemContainer.style.backgroundColor = '#ececec';
  itemContainer.style.resize = 'both';

  bufferLayer.style.width = '100vw';
  bufferLayer.style.height = '100vh';
  bufferLayer.style.position = 'fixed';
  bufferLayer.style.top = '0';
  bufferLayer.style.left = '0';
  bufferLayer.style.backgroundColor = '#A1C3CC';

  itemFrame.style.width = '100%';
  itemFrame.style.height = '100%';
  itemFrame.style.boxShadow = '14px 15px 19px 0px rgba(1,29,36,1)';

  btnClose.onmouseleave = () =>
    (btnClose.style.backgroundColor = btnClose_bgColor);
  btnClose.onmouseenter = () => (btnClose.style.backgroundColor = '#B01010');

  bufferLayer.onclick = () => closeItemContainer();

  let appended = 0;
  appendLayers = () => {
    if (!appended) {
      document.body.appendChild(bufferLayer);
      document.body.appendChild(itemContainer);
      itemContainer.appendChild(urlDisplay);
      itemContainer.appendChild(itemFrame);
    }
    appended = 1;
  };

  openItemContainer = () => {
    bufferLayer.style.opacity = 0.5;
    itemContainer.style.opacity = 1;
    itemContainer.style.zIndex = 100;
    bufferLayer.style.zIndex = 50;
  };

  closeItemContainer = () => {
    itemContainer.style.opacity = 0;
    bufferLayer.style.opacity = 0;
    itemContainer.style.zIndex = -100;
    bufferLayer.style.zIndex = -50;
    itemFrame.setAttribute('src', '');
  };
};

module.exports = {
  init,
  btnClose,
  btnClose_bgColor,
  bufferLayer,

  itemContainer,
  itemFrame,
  itemURL,
  urlDisplay
};

},{}]},{},[1]);
