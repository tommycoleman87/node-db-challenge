
exports.seed = function(knex) {
      return knex('resources').insert([
        {id: 1, resource_name: 'wood', description: ' 8 foot 4x4 Cedar planks'},
        {id: 2, resource_name: 'vacuum', description: 'A hoover vacuum'},
        {id: 3, resource_name: 'person', description: 'A people'},
        {id: 4, resource_name: 'shovel', description: 'A round point shovel'},
        {id: 5, resource_name: 'sod', description: 'St. Augustine Grass'},
        {id: 6, resource_name: 'nails', description: '1.5 inch wood nails'},
      ]);
};
