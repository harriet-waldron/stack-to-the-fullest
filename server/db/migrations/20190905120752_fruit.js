exports.up = function (knex) {
  return knex.schema.createTable('planets', table => {
    table.increments('id')
    table.string('name')
    // table.string('symbol')
    // table.string('mythology')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('planets')
}
