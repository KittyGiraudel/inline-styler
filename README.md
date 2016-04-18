# Inline-Styler

Inline-Styler is a teeny tiny JavaScript library to easily manipulate the `style` attribute of an element.

## Example

```js
// <div class="foo" style="color: blue; line-height: 1">…</div>

var node = document.querySelector('.foo')
var style = node.getAttribute('style')
var stylizer = new Stylizer(style) // Also works fine if there is no style attribute set yet

// Unset a property
stylizer.unsetStyle('line-height')

// Set a property
stylizer.setStyle('float', 'left')

// Set multiple properties
stylizer.setStyle({
  'color': 'red',
  'font-size': '100%'
})

node.setAttribute('style', stylizer.toString())

// <div class="foo" style="float: left; color: red; font-size: 100%;">…</div>
```

## API

* `.hasStyle(property)`: check if the element has `property` set in its `style` attribute
* `.getStyle(property)`: get value of `property` set in its `style` attribute or `null`
* `.unsetStyle(property)`: unset `property` from `style` attribute
* `.setStyle(property, value)`: set `property` to `value` in `style` attribute
* `.toString()` returns the string representation to be set as `style` attribute
