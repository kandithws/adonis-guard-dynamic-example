const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  const Gate = use('Gate')

  Gate.policy('App/Models/User', 'App/Policies/UserPolicy')
  Gate.policy('App/Models/Article', 'App/Policies/ArticlePolicy')
})
