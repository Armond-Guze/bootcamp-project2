const router = require('express').Router();
const { User } = require('../../../RUT-VIRT-FSF-PT-10-2023-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project/Main/models');
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/', withAuth, async(req, res) => {
    try {
       