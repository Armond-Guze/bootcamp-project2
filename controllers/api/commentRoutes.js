const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    console.log('i am here');
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
        console.log('comment created');
        console.log(newComment);
      res.status(200).json(newComment);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:id', withAuth, async(req, res) => {
    try {
        const comments = await Comment.findAll({
           where:{post_id: req.params.id}
            
          });
      
          res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json(err);
      }
})

module.exports = router;