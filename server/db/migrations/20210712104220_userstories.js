//try keep the DB names the pure versions e.g userstory
exports.up = function (knex) {
  return knex.schema.createTable('userstories', table => {
    table.increments('id')
    table.string('name')
    table.string('userstory')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('userstories')
}
