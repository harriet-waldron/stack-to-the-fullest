exports.up = function (knex) {
  return knex.schema.createTable('skyculture', table => {
    table.increments('id')
    table.string('name')
    table.integer('numconstellation')
    table.integer('avgstars')
    table.string('blurb')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('skyculture')
}
