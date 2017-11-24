'use strict'

function splitClass (str) {
  return str.replace(/ {1,}/g, ',').split(',')
}

function filterClass (str, cls) {
  return splitClass(str).filter(function (match) {
    return match !== cls && match !== ''
  }).join(' ')
}

/**
 * Generates a basic custom select box
 * @class
 * @param {HTMLElement} el The dom node to instantiate this class using
 */
function CustomSelect (el) {
  if (!el) return false
  var block = el.className.split(' ')[0] || 'custom-select'

  this.el = el
  this.select = el.querySelector('select')

  this.selectValue = document.createElement('div')
  this.selectValue.className = block + '__value'
  this.selectArrow = document.createElement('div')
  this.selectArrow.className = block + '__arrow'

  this.el.appendChild(this.selectValue)
  this.el.appendChild(this.selectArrow)

  this.setFakeValue()

  this.onChange = this.onChange.bind(this)
  this.onFocus = this.onFocus.bind(this)
  this.onBlur = this.onBlur.bind(this)

  this.select.addEventListener('change', this.onChange, false)
  this.select.addEventListener('focus', this.onFocus, false)
  this.select.addEventListener('blur', this.onBlur, false)
}
/**
 * onChange event handler
 */
CustomSelect.prototype.onChange = function () {
  this.setFakeValue()
}
/**
 * onFocus event handler
 */
CustomSelect.prototype.onFocus = function () {
  var hasClass = splitClass(this.el.className).indexOf('is-focused') > -1
  if (!hasClass) this.el.className += ' is-focused'
}
/**
 * onBlur event handler
 */
CustomSelect.prototype.onBlur = function () {
  var hasClass = splitClass(this.el.className).indexOf('is-focused') > -1
  if (hasClass) this.el.className = filterClass(this.el.className, 'is-focused')
}
/**
 * Get the actual text value of the selected option
 */
CustomSelect.prototype.getSelectedOptionText = function () {
  return this.select.querySelectorAll('option')[this.select.selectedIndex === -1 ? 0 : this.select.selectedIndex].textContent
}
/**
 * Set/update the 'fake' value of the select
 */
CustomSelect.prototype.setFakeValue = function () {
  this.selectValue.innerHTML = this.getSelectedOptionText()
}

module.exports = CustomSelect
