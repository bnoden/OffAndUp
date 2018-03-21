const func = require('../func').hold;
const {
  btnClose,
  btnClose_bgColor,
  bufferLayer,
  itemContainer,
  itemFrame,
  itemURL,
  urlDisplay
} = require('../init');

const buildItemContainer = (url, urlHref, hrefColor = '#0f94a8') => {
  itemURL.innerText = itemURL.href = itemFrame.src = url;
  itemURL.target = '_blank';
  urlDisplay.appendChild(itemURL);
  btnClose.innerText = 'close [x]';
  urlDisplay.appendChild(btnClose);

  appendLayers();

  urlHref = urlDisplay.querySelector('a');
  urlHref.style.color = hrefColor;
  urlHref.style.textDecoration = 'none';
  urlHref.onmouseover = () => (urlHref.style.color = '#01505C');
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
