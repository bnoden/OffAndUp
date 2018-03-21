const func = require('../func').sold;

module.exports = (list = func.list(), isSold = func.isSold, fade = func.fade) =>
  [...list].map(items => fade([items].filter(item => isSold(item))));
