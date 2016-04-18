var InlineStyler = require('inline-styler')

var node = document.createElement('div')
var styler = new InlineStyler(node.getAttribute('style'))

styler
  .setStyle('color', 'red')
  .setStyle('font-size', '100%')

node.setAttribute('style', styler.toString())
