const { Post, User, Comment } = require('./../models');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

////////////////////////////////////////////////////////////
// GET ALL POSTS
////////////////////////////////////////////////////////////

exports.getAllPosts = catchAsync(async (req, res, next) => {
  const dbGetAllPosts = await Post.findAll({
    attributes: ['id', 'title', 'created_at', 'post_content'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
    // ORDER POSTS BASED ON CREATE DATE
    order: [['created_at', 'DESC']],
  });

  const posts = dbGetAllPosts.map((post) => post.get({ plain: true }));
  res.render('homepage', { posts, loggedIn: req.session.loggedIn });
});

////////////////////////////////////////////////////////////
// GET ALL PAGES
////////////////////////////////////////////////////////////

exports.getOnePost = catchAsync(async (req, res, next) => {
  const id = req.params.id;

  const dbGetOnePost = await Post.findOne({
    where: { id },
    attributes: ['id', 'title', 'created_at', 'post_content'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
    // ORDER COMMENTS BASED ON CREATE DATE
    order: [[{ model: Comment }, 'created_at', 'DESC']],
  });

  // Error handler for when ID does not exist
  if (!dbGetOnePost) {
    return next(new AppError('No Post found with that ID', 404));
  }
  const post = dbGetOnePost.get({ plain: true });
  res.render('single-post', { post, loggedIn: req.session.loggedIn });
});

////////////////////////////////////////////////////////////
// GO TO LOGIN PAGE
////////////////////////////////////////////////////////////
exports.loginPage = catchAsync(async (req, res, next) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

////////////////////////////////////////////////////////////
// GO TO SIGNUP PAGE
////////////////////////////////////////////////////////////

exports.signUpPage = catchAsync(async (req, res, next) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});
