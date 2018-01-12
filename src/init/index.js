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
