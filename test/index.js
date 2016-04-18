const assert = require('assert')
const InlineStyler = require('../')

describe('InlineStyler', () => {
  var actual, expect, inlineStyler

  it('getStyle(..)', () => {
    inlineStyler = new InlineStyler('width:50px;')

    actual = inlineStyler.getStyle('width')
    expect = '50px'
    assert.equal(actual, expect)

    actual = inlineStyler.getStyle('height')
    expect = null
    assert.equal(actual, expect)
  })

  it('setStyle(..)', () => {
    inlineStyler = new InlineStyler('')
    inlineStyler.setStyle('width', '50px')

    actual = inlineStyler.getStyle('width')
    expect = '50px'
    assert.equal(actual, expect)
  })
  
  it('unsetStyle(..)', () => {
    inlineStyler = new InlineStyler('width: 50px')
    inlineStyler.unsetStyle('width')

    actual = inlineStyler.getStyle('width')
    expect = null
    assert.equal(actual, expect)
  })

  it('hasStyle(..)', () => {
    inlineStyler = new InlineStyler('width:50px;')

    actual = inlineStyler.hasStyle('width')
    expect = true
    assert.equal(actual, expect)

    actual = inlineStyler.hasStyle('height')
    expect = false
    assert.equal(actual, expect)
  })
  
  it('getStyles(..)', () => {
    inlineStyler = new InlineStyler('width:50px;height:100px;')

    actual = inlineStyler.getStyles()
    expect = { 'width': '50px', 'height': '100px' }
    assert.deepEqual(actual, expect)

    inlineStyler.setStyle('color', 'red')

    actual = inlineStyler.getStyles()
    expect = { 'width': '50px', 'height': '100px', 'color': 'red' }
    assert.deepEqual(actual, expect)
  })

  it('parseStyles(..)', () => {
    inlineStyler = new InlineStyler('')

    actual = inlineStyler.parseStyles('width:50px')
    expect = { 'width': '50px' }
    assert.deepEqual(actual, expect)

    actual = inlineStyler.parseStyles('width:50px;')
    expect = { 'width': '50px' }
    assert.deepEqual(actual, expect)

    actual = inlineStyler.parseStyles('width: 50px')
    expect = { 'width': '50px' }
    assert.deepEqual(actual, expect)

    actual = inlineStyler.parseStyles('width: 50px;')
    expect = { 'width': '50px' }
    assert.deepEqual(actual, expect)

    actual = inlineStyler.parseStyles('width:  50px;')
    expect = { 'width': '50px' }
    assert.deepEqual(actual, expect)

    actual = inlineStyler.parseStyles('width:50px;height:100px')
    expect = { 'width': '50px', 'height': '100px' }
    assert.deepEqual(actual, expect)

    actual = inlineStyler.parseStyles('width:50px;height:100px;')
    expect = { 'width': '50px', 'height': '100px' }
    assert.deepEqual(actual, expect)

    actual = inlineStyler.parseStyles('width:50px; height:100px;')
    expect = { 'width': '50px', 'height': '100px' }
    assert.deepEqual(actual, expect)
  })

  it('toString(..)', () => {
    inlineStyler = new InlineStyler('width:50px')

    actual = inlineStyler.toString()
    expect = 'width: 50px;'
    assert.equal(actual, expect)

    inlineStyler = new InlineStyler('width:50px;')

    actual = inlineStyler.toString()
    expect = 'width: 50px;'
    assert.equal(actual, expect)

    inlineStyler = new InlineStyler('width: 50px')

    actual = inlineStyler.toString()
    expect = 'width: 50px;'
    assert.equal(actual, expect)

    inlineStyler = new InlineStyler('width:50px; height:  100px')

    actual = inlineStyler.toString()
    expect = 'width: 50px; height: 100px;'
    assert.equal(actual, expect)
  })
})
