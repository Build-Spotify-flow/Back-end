exports.up = function(knex) {
  return knex.schema.createTable("dislikedSongs", users => {
    users.increments();
    users.string("trackID").notNullable();
    users.string("usersID").notNullable().references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("dislikedSongs");
};
