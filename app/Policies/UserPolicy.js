'use strict'

class UserPolicy {
  index (user) {
    return true
  }

  show (user, resource) {
    return true
  }

  store (user) {
    return true
  }

  update (user, resource) {
    return user.role === 'admin' || user.id === resource.id
  }

  destroy (user, resource) {
    return user.role === 'admin' || user.id === resource.id
  }
}

module.exports = UserPolicy
