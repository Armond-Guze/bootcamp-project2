const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
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
          res.status(200).json(comments);
    } catch (err) {
        res.status(500).json(err);
      }
})

router.delete("/:id", async (req, res) => {
  try {
    const comments = await Comment.destroy({
      where: {
        id: req.params.id
      },
    });
    if (!comments) {
      res.status(404).json({ message: 'no comment found with this id' });
      return;
    }
    res.status(200).json(comments);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});



module.exports = router;