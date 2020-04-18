'use strict'
/** @type { import('../BaseValidator')} */
const BaseValidator = use( 'App/Validators/BaseValidator' )

class Store extends BaseValidator {
  get rules() {
    return {
      title: 'required|string',
      content: 'string',
    }
  }
}

module.exports = Store
