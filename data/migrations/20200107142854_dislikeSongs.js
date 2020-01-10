exports.up = function(knex) {
  return knex.schema.createTable("dislikedSongs", users => {
    users.increments();
    users.string("trackID").notNullable();
    users.integer("usersID").notNullable().references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("dislikedSongs");
};
