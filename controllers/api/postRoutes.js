const router = require('express').Router();
const withAuth = require('../../utils/auth');
const handlerPost = require('../../utils/handlerPost');

////////////////////////////////////////////////////////
// ROUTES
////////////////////////////////////////////////////////

router.route('/').get(handlerPost.getAllPosts).post(handlerPost.createPost);

router.route('/:id').get(handlerPost.getOnePost).put(withAuth, handlerPost.editPost).delete(withAuth, handlerPost.deletePost);

module.exports = router;
