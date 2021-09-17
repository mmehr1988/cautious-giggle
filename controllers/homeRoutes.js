const router = require('express').Router();
const handlerHome = require('./../utils/handlerHome');

router.get('/', handlerHome.getAllPosts);

router.get('/login', handlerHome.loginPage);

router.get('/signup', handlerHome.signUpPage);

router.get('/post/:id', handlerHome.getOnePost);

module.exports = router;
