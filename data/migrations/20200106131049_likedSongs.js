exports.up = function(knex) {
  return knex.schema.createTable("likedSongs", users => {
    users.increments();
    users.string("usersID").notNullable().references('id').inTable('users');
    users.string("name").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("likedSongs");
};
