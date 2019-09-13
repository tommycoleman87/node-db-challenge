
exports.seed = function(knex) {
      return knex('tasks').insert([
        {id: 1, description: 'Cut wood', notes: 'Cut wood to length', completed: false, project_id: 1 },
        {id: 2, description: 'Build base', notes: 'Lay wood in a 6 X 6 base', completed: false, project_id: 1 },
        {id: 3, description: 'Nail base together', notes: 'Nail the pieces of wood together', completed: false, project_id: 1 },
        {id: 4, description: 'Vacuum', notes: 'Vacuum all the floors in the house', completed: false, project_id: 2 },
        {id: 5, description: 'Wash Dishes', notes: 'Wash all the dirty dishes in the house', completed: false, project_id: 2 },
        {id: 6, description: 'Mop Floors', notes: 'Use hot water to mop floors', completed: false, project_id: 2 },
        {id: 7, description: 'Weed flower bed', notes: 'Pull up any stray weeds in the flower bed', completed: false, project_id: 3 },
        {id: 8, description: 'Pull up old grass', notes: 'Pull up any old grass', completed: false, project_id: 3 },
        {id: 9, description: 'Lay sod', notes: 'Lay sod close together, water after', completed: false, project_id: 3},
      ]);
};
