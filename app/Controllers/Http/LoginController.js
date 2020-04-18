'use strict'

class LoginController {

  async login( { auth, request, response } ) {
    if (request.body.email) {
      return await auth.authenticator( 'jwt' ).attempt( request.body.email, request.body.password, true )
    }

    return await auth.authenticator( 'jwtUsername' ).attempt( request.body.username, request.body.password, true )
  }

  async logout( { auth } ) {
    return await auth.logout()
  }
}

module.exports = LoginController
