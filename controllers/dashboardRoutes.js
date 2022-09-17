const router = require("express").Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req,res) => {
    try {
        const allPost = await Post.findAll({
            where: { 
                user_id: req.session.id 
            },
        });
  
        const userPosts = allPost.map((post) => post.get({ plain: true }));
   
        res.render('userPosts', {
            layout:"dashboard",
            userPosts,
        });
    } catch (err) {
    console.log(err);
    res.redirect("login");
    } 
});

router.get("/new", withAuth, (req, res) => {
    res.render("newPost", {
      layout: "dashboard"
    });
});
  

module.exports = router;