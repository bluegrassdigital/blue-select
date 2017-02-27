# blue-select

<p>A small, flexible custom select widget class. Works seamlessly with <a href="https://github.com/bluegrassdigital/blue-widgets" target="_blank">blue-widgets</a> or standalone.</p>

Check out the [examples](https://bluegrassdigital.github.io/blue-select/#/page/docs/examples.md)

## Installation

This is a UMD module, so can be consumed any way you like

Install via npm `npm install blue-select --save`

Or include `blue-select.js` from the `./dist` folder in your page

### CommonJS
```javascript
var BlueSelect = require('blue-select')

var el = document.querySelector('#foo')

new BlueSelect(el)
```

### ES2015 module
```javascript
import BlueSelect from 'blue-select'

const el = document.querySelector('#foo')

new BlueSelect(el)
```

### Standalone

```html
<div class="select" id="Foo">
  <select name="SomeSelect">
    <option value="">Please select</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>

<script src="blue-select.js"></script>
<script>
var el = document.querySelector('#foo')

new BlueSelect(el)
</script>
```

## Styling

The module implements BEM class naming for the fake value and arrow elements it creates. The 'block' class name is taken from the first class present on the container element on which you instantiated the class. So in the above case the classes would be: `.select`, `.select__value` and `.select__arrow`

Some CSS will be required to hide the select and style the arrows and fake value, none is included in the script. This implementation is left to you.

When the select is focused the container will have an `is-focused` state class

This is the base level of styling required:

```CSS
.custom-select {
  position: relative;
}
.custom-select select {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  font-size: inherit;
  z-index: 1;
}

```

## Contributing to blue-select

[Standard JS](http://standardjs.com/) applies

camelCase for function and variable names

Standard [Github Flow](https://guides.github.com/introduction/flow/) - branch, submit pull requests

### Getting set up

- Pull the repo
- run `npm install` or `yarn install`
- run `npm run build` to compile the dist version
