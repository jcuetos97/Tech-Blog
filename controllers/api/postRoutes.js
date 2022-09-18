const router = require('express').Router();
const { User } = require('../../models');

router.post('/new', async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      body: req.body.body,
      });
      
      res.json({ user: newUser, message: 'You are now signed up!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;