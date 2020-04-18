'use strict'
/** @type { import('../BaseValidator')} */
const BaseValidator = use( 'App/Validators/BaseValidator' )

class Update extends BaseValidator {
  get rules() {
    return {
      title: 'string',
      content: 'string'
    }
  }
}

module.exports = Update
