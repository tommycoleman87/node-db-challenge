
exports.seed = function(knex) {
      return knex('projects').insert([
        {id: 1, project_name: 'Build Shed', description: 'Build a wooden shed in the backyard', completed: false},
        {id: 2, project_name: 'Clean House', description: 'Wash dishes, vacuum house, mop floors, do laundry', completed: true},
        {id: 3, project_name: 'Landscape', description: 'Pull weeds, pull up old grass, lay need sod, plant roses', completed: false}
      ]);

};
