# Inline-Styler

Inline-Styler is a teeny tiny JavaScript library to easily manipulate the `style` attribute of an element.

It also works seamlessly with [Cheerio](https://github.com/cheeriojs/cheerio) on the server-side as well.

## API

### `.hasStyle(property)`

Check whether the element has `property` set in its `style` attribute.

```js
// <div style="color: red;">…</div>
var styler = new InlineStyler(node.getAttribute('style'))
var hasColor = styler.hasStyle('color') // true
var hasFontSize = styler.hasStyle('font-size') // false
```

### `.getStyle(property)`

Get value of `property` set in its `style` attribute or `null`.

```js
// <div style="color: red;">…</div>
var styler = new InlineStyler(node.getAttribute('style'))
var color = styler.getStyle('color') // red
var fontSize = styler.getStyle('font-size') // null
```

### `.unsetStyle(property)`

Unset `property` from `style` attribute.

```js
var styler = new InlineStyler(node.getAttribute('style'))
styler.unsetStyle('color')
```

### `.setStyle(property, value)`

Set `property` to `value` in `style` attribute. Override style if it already exists.

```js
var styler = new InlineStyler(node.getAttribute('style'))

// Individual
styler.setStyle('color', 'blue')
styler.setStyle('font-size', '100%')

// Chained
styler
  .setStyle('color', 'blue')
  .setStyle('font-size', '100%')
```

### `.setStyles(object)`

Alias for `.setStyle(object)`.

```js
var styler = new InlineStyler(node.getAttribute('style'))

styler.setStyles({
  'color': 'blue',
  'font-size', '100%'
})
```

### `.toString()`

Returns the string representation to be set as `style` attribute.

```js
// <div style="color: red;">…</div>
var styler = new InlineStyler(node.getAttribute('style'))
styler.setStyle('color', 'blue')
node.setAttribute('style', styler.toString())
// <div style="color: blue;">…</div>
```

## Tests

```
npm test
```
