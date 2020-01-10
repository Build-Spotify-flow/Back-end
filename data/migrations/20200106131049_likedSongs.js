exports.up = function(knex) {
  return knex.schema.createTable("likedSongs", track => {
    track.increments();
    track.integer("trackID").notNullable();
    track.integer("usersID").references('id').inTable('users').notNullable().onDelete('cascade');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("likedSongs");
};
