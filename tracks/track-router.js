const router = require('express').Router();
const model = require('./tracks-model');
const users = require('../users/users-model')

router.post('/', (req, res) => {
  model.allLiked().then(info => {
    res.status(200).send(info)
  })
})
router.get('/', (req, res) => {
  console.log('h0')
  users.findBy({username: req.token.username}).then(user => {
    console.log('h1', user)
    const id = user[0].id;
    model.findLiked(id).then(liked => {
      console.log('h2')
      model.findDisliked(id).then(disliked => {
        console.log('h3')
        res.status(200).send({liked, disliked});
      });
    });
  })
});

router.post('/like', (req, res) => {
  users.findBy({username: req.token.username}).then(user => {
    const id = user[0].id;
    model.addLike(id, req.body).then(() => {
      model.removeDislike(id, req.body)
      model.findLiked(id).then(re => {
        res.status(200).send(re)
      });
    });
  })
});

router.post('/dislike', (req, res) => {
  users.findBy({username: req.token.username}).then(user => {
    const id = user[0].id;
    model.addDislike(id, req.body).then(() => {
      model.removeLike(id, req.body)
      model.findDisliked(id).then(re => {
        res.status(200).send(re)
      });
    });
  })
});

module.exports = router;
