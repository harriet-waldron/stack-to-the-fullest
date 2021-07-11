exports.up = function (knex) {
  return knex.schema.createTable('maorisky', table => {
    table.increments('id')
    table.string('constname')
    table.string('engname')
    table.string('story')
    table.string('userstory')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('maorisky')
}
