'use strict'
/** @type { import('../BaseValidator')} */
const BaseValidator = use( 'App/Validators/BaseValidator' )

class Update extends BaseValidator {
  get rules() {
    const userId = this.ctx.params.id
    return {
      email: `email|unique:users,email,id,${userId}`,
      password: 'string',
      username: `string|unique:users,username,id,${userId}`,
      role: 'string'
    }
  }
}

module.exports = Update
