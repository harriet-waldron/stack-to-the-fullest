
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('userstories').del()
    .then(function () {
      // Inserts seed entries
      return knex('userstories').insert([
        {id: 1, name: 'Jess', userstory: "Met a star"},
        {id: 2, name: 'Jamie', userstory: "Met two stars"},
        {id: 3, name: 'Jorge', userstory: "Met three stars"}
      ]);
    });
};
