const _ = require('lodash')
const Route = use('Route')

class BaseValidator {

  /**
   * @virtual
   * Path parameter to load resource (/api/:id)
   * return null to skip loading
   * @return {string}  default :id
   */
  get resourcePathParam () {
    return 'id'
  }

  /**
   * @virtual
   * @returns {string} Column to match resourcePathParam  (default :id)
   */
  get resourceIdField () {
    return 'id'
  }

  /**
  * @virtual
  * A resource model name that will be invoked
  * @return {string} default: null (search dynamically)
  */

  get modelName() {
    return null
  }

  /**
  * @virtual
  * A controller method name that will be invoked
  * @return {string} default: null (search dynamically)
  */

  get controllerMethod () {
    return null
  }


  /**
   * @virtual
   * To skip authorization, add
   * ` async authorize() { return true } `
   * To your validator
   */
  async authorize() {
    return await this._authorize()
  }

  //--------- Private -------
  async _authorize() {
    const route = this._getRoute()
    const modelName = this.modelName || route[0].replace('Controller', '')
    const method = this.controllerMethod || route[1]

    let resource = null

    const hasResource = this.ctx.params.hasOwnProperty(this.resourcePathParam)

    const M = use(`App/Models/${modelName}`)

    if (hasResource) {
      resource  = await M.findBy( this.resourceIdField, this.ctx.params[`${this.resourcePathParam}`])

      if (resource === null) {
        return this.ctx.response.status(404).send({ message: 'Resource Not Found' })
      }

      this.ctx.resource = resource // Set for controller
    }
    else {
      resource = new M()
    }

    if (!(await this.ctx.guard.allows(`${method}`, resource))) {
      return this.ctx.response.status(400).send({ message: 'Unauthorized' })
    }

    return true
  }

  async fails(errorMessages) {
    this.ctx.response.status(400).send(errorMessages)
  }

  _getRoute () {
    return Route.match(
      this.ctx.request.url(),
      this.ctx.request.method()
    ).route.handler.split('.')
  }
}

module.exports = BaseValidator
