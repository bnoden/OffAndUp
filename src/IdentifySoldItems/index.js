module.exports.IdentifySoldItems = price => {
  price = document.querySelectorAll('.item-info-price');
  for (let item in price) {
    if (price[item].innerText === 'SOLD') {
      // Make sold items visible while obvious that they're not available
      price[item].parentNode.parentNode.parentNode.style.opacity = 0.25;
    }
  }
};
