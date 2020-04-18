'use strict'

const Article = use( 'App/Models/Article' )

class ArticleController {
  async index({ request, response}) {
    return response.status(200).send({ articles: await Article.all() })
  }

  async store({ auth, request }) {
    let articleParams = request.only(['title', 'content'])
    articleParams.user_id = auth.user.id
    return await Article.create(articleParams)
  }

  async show({ request, response, resource }) {
    return resource
  }

  async update({ request, response, resource }) {
    let articleParams = request.only(['title', 'content'])
    resource.merge( articleParams )
    await resource.save()
    return resource
  }

  async destroy({ request, response, resource }) {
    await resource.delete()
    return response.status(200).send({ message: 'deleted' })
  }
}

module.exports = ArticleController
