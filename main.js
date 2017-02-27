'use strict'
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
  this.opts = this.select.querySelectorAll('option')

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
  this.el.classList.add('is-focused')
}
/**
 * onBlur event handler
 */
CustomSelect.prototype.onBlur = function () {
  this.el.classList.remove('is-focused')
}
/**
 * Get the actual text value of the selected option
 */
CustomSelect.prototype.getSelectedOptionText = function () {
  return this.opts[this.select.selectedIndex].textContent
}
/**
 * Set/update the 'fake' value of the select
 */
CustomSelect.prototype.setFakeValue = function () {
  this.selectValue.innerHTML = this.getSelectedOptionText()
}

module.exports = CustomSelect
