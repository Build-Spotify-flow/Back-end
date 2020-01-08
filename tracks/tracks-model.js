const db = require('../data/dbConfig.js');

module.exports = {
  addLike,
  addDislike,
  removeLike,
  removeDislike,
  findLiked,
  findDisliked
};

function findLiked(usersid) {
  return db('likedSongs').where({usersid});
}
function findDisliked(usersid) {
  return db('dislikedSongs').where({usersid});
}

async function addLike(usersid, songs) {
  if (songs instanceof Array) {
    return await db('likedSongs').insert(
      songs.map(song => {
        return { ...song, usersid };
      })
    );
  } else {
    return await db('likedSongs').insert({ ...songs, usersid });
  }
}

async function addDislike(usersid, songs) {
  if (songs instanceof Array) {
    return await db('dislikedSongs').insert(
      songs.map(song => {
        return { ...song, usersid };
      })
    );
  } else {
    return await db('dislikedSongs').insert({ ...songs, usersid });
  }
}

async function removeLike(usersid, songs) {
  if(songs instanceof Array){
    return await db('likedSongs').where({usersid}).whereIn('trackid', songs.map(song => song.trackid)).del()
  }else{
    return await db('likedSongs').where({usersid, ...songs}).del()
  }
}

async function removeDislike(usersid, songs) {
  if(songs instanceof Array){
    return await db('dislikedSongs').where({usersid}).whereIn('trackid', songs.map(song => song.trackid)).del()
  }else{
    return await db('dislikedSongs').where({usersid, ...songs}).del()
  }
}
