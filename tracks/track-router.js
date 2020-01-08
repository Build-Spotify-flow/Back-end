const router = require('express').Router();
const model = require('./tracks-model');

router.post('/', (req, res) => {
  console.log(req.token)
  model.findLiked(req.token.username).then(re => {
    console.log('liked')
    console.log(re)
  });
  model.findDisliked(req.token.username).then(re => {
    console.log('disliked')
    console.log(re)
  });
  res.status(200).send({ message: 'ok' });
});

router.post('/add/like', (req, res) => {
  model.addLike(req.token.username, req.body).then(() => {
    model.findLiked(req.token.username).then(re => {
      res.status(200).send(re)
    });
  });
});

router.post('/add/dislike', (req, res) => {
  model.addDislike(req.token.username, req.body).then(() => {
    model.findDisliked(req.token.username).then(re => {
      res.status(200).send(re)
    });
  });
});

router.post('/remove/like', (req, res) => {
  model.removeLike(req.token.username, req.body).then(() => {
    model.findLiked(req.token.username).then(re => {
      res.status(200).send(re)
    });
  });
})

router.post('/remove/dislike', (req, res) => {
  model.removeDislike(req.token.username, req.body).then(() => {
    model.findDisliked(req.token.username).then(re => {
      res.status(200).send(re)
    });
  });
})

module.exports = router;
