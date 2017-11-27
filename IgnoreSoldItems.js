// Reduce visibility of SOLD items in OfferUp.com

const IgnoreSoldItems = (() => {
  identifySoldItems = price => {
    price = document.querySelectorAll('.item-info-price');
    for (let item in price) {
      if (price[item].innerHTML === 'SOLD') {
        // Make sold items visible while obvious that they're not available
        price[item].parentNode.parentNode.parentNode.style.opacity = 0.25;
      }
    }
  };

  identifySoldItems();

  let last_known_scroll_position = 0;
  let scrolling = 0;
  function doSomething(scroll_pos) {}

  window.addEventListener('scroll', e => {
    last_known_scroll_position = window.scrollY;
    if (!scrolling) {
      window.requestAnimationFrame(() => {
        doSomething(last_known_scroll_position);
        scrolling = 0;
      });
      scrolling = 1;
      identifySoldItems();
    }
  });
})();
