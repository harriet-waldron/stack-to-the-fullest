
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('maorisky').del()
    .then(function () {
      // Inserts seed entries
      return knex('maorisky').insert([
        
        {id: 1, constname: 'Taki-o-Autahi', engname: 'Southern Cross', story: 'Ko te kāhui whetū iti rawa atu o ngā kāhui whetū e 88 o tuarangi. Koia ngā whetū tino pīataata i te uma o Ranginui ki te tonga. He rīpeka te āhua o te noho mai o ngā whetū ki tā te karu titiro i a Papatūānuku, ko te rārangi roa o te rīpeka e anga atu ana ki te tonga. He mea tino whakamahi te Taki o Autahi ki te whakatere waka i te au moana. /n The smallest of 88 constellations in space. This is the brightest constellation in the southern Sky. It is shaped like a cross when viewed from Earth, with the long line of the cross pointing south. The Southern Cross is an important constellation for ocean navigation.'},
        {id: 2, constname: 'Te Taura-o-te-waka-o-tamarereti', engname: 'Tamarēreti\'s Canoe', story: 'Cool stories'},
        {id: 3, constname: 'Tautoro', engname: 'Taurus', story: 'Say some things'}
        
      ]);
    });
};
