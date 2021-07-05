exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('planets').del()
    .then(function () {
      // Inserts seed entries
      return knex('planets').insert([
        { id: 1, name: 'Mercury' },
        { id: 2, name: 'Venus' },
        { id: 3, name: 'Earth' },
        { id: 4, name: 'Mars' },
        { id: 5, name: 'Jupiter' },
        { id: 6, name: 'Saturn' },
        { id: 7, name: 'Uranus' },
        { id: 8, name: 'Neptune' }

      ])
    })
}
