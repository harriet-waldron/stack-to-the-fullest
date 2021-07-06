
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('maorisky').del()
    .then(function () {
      // Inserts seed entries
      return knex('maorisky').insert([
        
        {id: 1, constname: 'Taki-o-Autahi', engname: 'Southern Cross', story: 'Nice star facts'},
        {id: 2, constname: 'Te Taura-o-te-waka-o-tamarereti', engname: 'Tamarēreti\'s Canoe', story: 'Cool stories'},
        {id: 3, constname: 'Tautoro', engname: 'Taurus', story: 'Say some things'}
        
      ]);
    });
};
