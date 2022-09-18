const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      });
  
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.username = newUser.username;
      req.session.logged_in = true;
      
      res.json({ user: newUser, message: 'You are now signed up!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;