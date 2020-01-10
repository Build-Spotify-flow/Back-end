exports.up = function(knex) {
  return knex.schema.createTable("likedSongs", track => {
    track.increments();
    track.string("trackid").notNullable();
    track.integer("usersid").references('id').inTable('users').notNullable().onDelete('cascade');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("likedSongs");
};
