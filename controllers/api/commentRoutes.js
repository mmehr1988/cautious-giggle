const router = require('express').Router();
const withAuth = require('../../utils/auth');
const handlerComment = require('../../utils/handlerComment');

////////////////////////////////////////////////////////
// ROUTES
////////////////////////////////////////////////////////

router.route('/').get(handlerComment.getAllComments).post(handlerComment.createComment);
router.delete('/:id', withAuth, handlerComment.deleteComment);

module.exports = router;
