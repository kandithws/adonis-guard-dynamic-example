'use strict'
/** @type { import('../BaseValidator')} */
const BaseValidator = use( 'App/Validators/BaseValidator' )

class Store extends BaseValidator {
  get rules() {
    return {
      email: 'required|email|unique:users,email',
      password: 'required|string',
      username: 'required|string|unique:users,username',
    }
  }


  /**
   *  Overide to implement special cases auth
   */
  async authorize() {
    return true
  }
}

module.exports = Store
