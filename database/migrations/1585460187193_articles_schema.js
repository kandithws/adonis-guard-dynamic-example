'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticlesSchema extends Schema {
  up () {
    this.create('articles', (table) => {
      table.increments()
      table.timestamps()
      table.string('title').notNullable()
      table.text('content').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
    })
  }

  down () {
    this.drop('articles')
  }
}

module.exports = ArticlesSchema
