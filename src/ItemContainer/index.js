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
