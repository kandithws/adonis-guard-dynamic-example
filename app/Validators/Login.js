'use strict'
/** @type { import('../BaseValidator')} */
const BaseValidator = use( 'App/Validators/BaseValidator' )

class Login extends BaseValidator {
  get rules() {
    return {
      email: 'required_without_any:username|email',
      username: 'required_without_any:email|string',
      password: 'required|string'
    }
  }

  /**
   *  Overide to implement special cases auth
   */
  async authorize() {
    return true
  }
}

module.exports = Login
