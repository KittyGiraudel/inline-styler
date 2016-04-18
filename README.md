# Inline-Styler

Inline-Styler is a teeny tiny JavaScript library to easily manipulate the `style` attribute of an element.

## Example

```js
// <div class="foo" style="color: blue; line-height: 1">…</div>

var node = document.querySelector('.foo')
var style = node.getAttribute('style')
var styler = new InlineStyler(style) // Also works fine if there is no style attribute set yet

// Unset a property
styler.unsetStyle('line-height')

// Set a property
styler.setStyle('float', 'left')

// Set multiple properties
styler.setStyle({
  'color': 'red',
  'font-size': '100%'
})

node.setAttribute('style', styler.toString())

// <div class="foo" style="float: left; color: red; font-size: 100%;">…</div>
```

It should work seamlessly with [Cheerio](https://github.com/cheeriojs/cheerio) on the server-side as well.

## API

### `hasStyle(property)`

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
// <div style="color: red;">…</div>
var styler = new InlineStyler(node.getAttribute('style'))
styler.unsetStyle('color')
```

### `.setStyle(property, value)` | `.setStyle(styles)`

Set `property` to `value` in `style` attribute. Override style if it already exists.

```js
// <div style="color: red;">…</div>
var styler = new InlineStyler(node.getAttribute('style'))

// Individual
styler.setStyle('color', 'blue')
styler.setStyle('font-size', '100%')

// Chained
styler
  .setStyle('color', 'blue')
  .setStyle('font-size', '100%')

// Grouped
styler.setStyle({
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
```

## Tests

```
npm test
```
