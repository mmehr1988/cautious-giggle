const router = require('express').Router();
const withAuth = require('../../utils/auth');
const handlerUser = require('../../utils/handlerUser');

////////////////////////////////////////////////////////
// ROUTES
////////////////////////////////////////////////////////

router.route('/').get(handlerUser.getAllUsers).post(handlerUser.createUser);

router.get('/:id', handlerUser.getOneUsers);

router.post('/login', handlerUser.loginUser);

router.post('/logout', withAuth, handlerUser.logoutUser);

module.exports = router;
