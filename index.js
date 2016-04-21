(function (global) {
  'use strict'

  var InlineStyler = function (styleAttribute) {
    this.styles = this.parseStyles(styleAttribute || '')
  }

  InlineStyler.prototype.getStyles = function getStyles () {
    return this.styles
  }

  InlineStyler.prototype.hasStyles = function hasStyles () {
    return Object.keys(this.styles).length > 0
  }

  InlineStyler.prototype.parseStyles = function parseStyles (styleAttribute) {
    return styleAttribute
      .split(';')
      .reduce(function (accumulator, declaration) {
        var chunks = declaration.split(/\s*:\s*/)
        if (chunks.length > 1) {
          var property = chunks[0].trim()
          var value = chunks[1].trim()
          accumulator[property] = value
        }
        return accumulator
      }, {})
  }

  InlineStyler.prototype.hasStyle = function hasStyle (property) {
    return typeof this.styles[property] !== 'undefined'
  }

  InlineStyler.prototype.setStyle = function setStyle (property, value) {
    if (typeof property === 'object' && !value) {
      return this.setStyles(property)
    }

    this.styles[property] = value
    return this
  }

  InlineStyler.prototype.setStyles = function setStyles (object) {
    for (var property in object) {
      this.setStyle(property, object[property])
    }

    return this
  }

  InlineStyler.prototype.unsetStyle = function unsetStyle (property) {
    delete this.styles[property]
    return this
  }

  InlineStyler.prototype.getStyle = function getStyle (property) {
    return this.styles[property]
  }

  InlineStyler.prototype.toString = function () {
    return Object.keys(this.styles)
      .reduce(function (accumulator, property) {
        accumulator.push(property + ': ' + this.styles[property] + ';')
        return accumulator
      }, [])
      .join(' ')
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = InlineStyler;
  } else {
    global.InlineStyler = InlineStyler;
  }

}(this))
