const {
  Router
} = require('express');
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.model');
const mongoose = require('mongoose');
const fileUploader = require('../configs/cloudinary.config');

const routeGuard = require('../configs/route-guard.config');

const Post = require("../models/Post.model")



router.get('/create-post', routeGuard, function (req, res) {

  res.render('post/add')


})

router.post('/create-post', fileUploader.single('picPath'), function (req, res) {

  const {
    content,
    picName
  } = req.body

  console.log('Hello erreur wesh', picName)
  console.log('Hello erreur wesh', content)

  Post.create({
      content,
      picName,
      picPath: req.file.path
    })
    .then(function () {
      res.send('coucou')
    })
    .catch(err => console.log('erreur', err))

})


module.exports = router;