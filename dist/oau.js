(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const { init, ItemContainer, IdentifySoldItems, func } = require("./src");
const { hold, sold, funcmap } = func;

init();

let stateCheck = setInterval(() => {
  if (document.readyState === "complete") {
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

},{"./src":5}],2:[function(require,module,exports){
const func = require("../func").sold;

module.exports = (list = func.list(), isSold = func.isSold, fade = func.fade) =>
  [...list].map(items => fade([items].filter(item => isSold(item))));

},{"../func":4}],3:[function(require,module,exports){
const func = require("../func").hold;
const {
  btnClose,
  btnClose_bgColor,
  bufferLayer,
  itemContainer,
  itemFrame,
  itemURL,
  urlDisplay
} = require("../init");

const buildItemContainer = (url, urlHref, hrefColor = "#0f94a8") => {
  itemURL.innerText = itemURL.href = itemFrame.src = url;
  itemURL.target = "_blank";
  urlDisplay.appendChild(itemURL);
  btnClose.innerText = "close [x]";
  urlDisplay.appendChild(btnClose);

  appendLayers();

  urlHref = urlDisplay.querySelector("a");
  urlHref.style.color = hrefColor;
  urlHref.style.textDecoration = "none";
  urlHref.onmouseover = () => (urlHref.style.color = "#01505C");
  urlHref.onmouseleave = () => (urlHref.style.color = hrefColor);
  btnClose.onclick = () => closeItemContainer();
};

module.exports = (list = func.list()) => {
  [...list].map(
    item =>
      (item.onclick = event => {
        event.preventDefault();
        buildItemContainer(item.parentNode.href);
        openItemContainer();
      })
  );
};

},{"../func":4,"../init":6}],4:[function(require,module,exports){
module.exports = {
  sold: {
    list: () => document.querySelectorAll(".item-info-price"),
    isSold: (item, str = "SOLD") => item.innerText === str,
    fade: elements =>
      [...elements].map(
        element =>
          (element.parentNode.parentNode.parentNode.style.opacity = 0.25)
      )
  },
  hold: {
    list: () => document.querySelectorAll(".vertical-middle")
  },
  funcmap: collection => [...collection].map(item => item)
};

},{}],5:[function(require,module,exports){
const { init } = require("./init");
const ItemContainer = require("./ItemContainer");
const IdentifySoldItems = require("./IdentifySoldItems");
const func = require("./func");

module.exports = { init, ItemContainer, IdentifySoldItems, func };

},{"./IdentifySoldItems":2,"./ItemContainer":3,"./func":4,"./init":6}],6:[function(require,module,exports){
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
