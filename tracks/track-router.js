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

router.post('/like', (req, res) => {
  model.addLike(req.token.username, req.body).then(() => {
    model.removeDislike(req.token.username, req.body)
    model.findLiked(req.token.username).then(re => {
      res.status(200).send(re)
    });
  });
});

router.post('/dislike', (req, res) => {
  model.addDislike(req.token.username, req.body).then(() => {
    model.removeLike(req.token.username, req.body)
    model.findDisliked(req.token.username).then(re => {
      res.status(200).send(re)
    });
  });
});

module.exports = router;
