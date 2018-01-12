const {
  btnClose,
  btnClose_bgColor,
  bufferLayer,
  itemContainer,
  itemFrame,
  itemURL,
  urlDisplay
} = require('./init');

const containerStyle = require('./containerStyle');

module.exports.ItemContainer = () => {
  btnClose.onmouseleave = () =>
    (btnClose.style.backgroundColor = btnClose_bgColor);
  btnClose.onmouseenter = () => (btnClose.style.backgroundColor = '#B01010');
  btnClose.onclick = () => closeitemContainer();
  bufferLayer.onclick = () => closeitemContainer();

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

  setItemContainer = itemPic => {
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
      };
    }
  };
};
