const router = require('express').Router();
const withAuth = require('./../utils/auth');
const handlerDashboard = require('./../utils/handlerDashboard');

router.get('/', withAuth, handlerDashboard.getUserPosts);

router.get('/create/', withAuth, handlerDashboard.createUserPost);

router.get('/edit/:id', withAuth, handlerDashboard.editUserPost);

module.exports = router;
