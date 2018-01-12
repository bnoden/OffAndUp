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

const itemContainer = document.createElement('div');
const bufferLayer = document.createElement('div');
const itemFrame = document.createElement('iframe');
const urlDisplay = document.createElement('p');
const itemURL = document.createElement('a');
const btnClose = document.createElement('button');

urlDisplay.style.margin = '0px';
urlDisplay.style.padding = '0px';
urlDisplay.style.fontSize = '20px';
urlDisplay.style.fontWeight = '600';

const btnClose_bgColor = '#C94949';
btnClose.style.backgroundColor = btnClose_bgColor;
btnClose.onmouseleave = () =>
  (btnClose.style.backgroundColor = btnClose_bgColor);
btnClose.onmouseenter = () => (btnClose.style.backgroundColor = '#B01010');
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

openitemContainer = () => {
  bufferLayer.style.opacity = 0.5;
  itemContainer.style.opacity = 1;
  itemContainer.style.zIndex = 100;
  bufferLayer.style.zIndex = 50;
};

closeitemContainer = () => {
  itemContainer.style.opacity = 0;
  bufferLayer.style.opacity = 0;
  itemContainer.style.zIndex = -100;
  bufferLayer.style.zIndex = -50;
  itemFrame.setAttribute('src', '');
};

setItemPage = itemPic => {
  itemPic = document.querySelectorAll('.vertical-middle');

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

      openitemContainer();
      btnClose.onclick = () => closeitemContainer();
    };
  }
};

bufferLayer.onclick = () => closeitemContainer();

identifySoldItems = price => {
  price = document.querySelectorAll('.item-info-price');
  for (let item in price) {
    if (price[item].innerText === 'SOLD') {
      // Make sold items visible while obvious that they're not available
      price[item].parentNode.parentNode.parentNode.style.opacity = 0.25;
    }
  }
};
