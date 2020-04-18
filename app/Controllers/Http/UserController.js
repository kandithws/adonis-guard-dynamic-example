'use strict'

const User = use( 'App/Models/User' )

class UserController {

  async index({ request, response}) {
    return response.status(200).send({ users: await User.all() })
  }

  async store({ request, response }) {
    let userParams = request.only(['email', 'password', 'username'])

    userParams.role = 'user'

    return await User.create(userParams)
  }

  async show({ request, response, resource }) {
    return resource
  }

  async update({ auth, request, response, resource }) {
    let userParams = request.only(['email', 'password', 'username', 'role'])
    if (auth.user.role !== 'admin') {
      userParams.role = 'user'
    }

    resource.merge( userParams )
    await resource.save()
    return resource
  }

  async destroy({ request, response, resource }) {
    await resource.delete()
    return response.status(200).send({ message: 'deleted' })
  }

}

module.exports = UserController
