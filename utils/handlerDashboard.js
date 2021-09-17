const { User, Post, Comment } = require('./../models');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

////////////////////////////////////////////////////////
// MIDDDLEWARES : USER ROUTES
////////////////////////////////////////////////////////

exports.getUserPosts = catchAsync(async (req, res, next) => {
  const user_id = req.session.user_id;

  const findUserPosts = await Post.findAll({
    where: { user_id },
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

  const posts = findUserPosts.map((post) => post.get({ plain: true }));
  res.render('dashboard', { posts, loggedIn: true });
});

exports.createUserPost = catchAsync(async (req, res, next) => {
  const user_id = req.session.user_id;

  const findUserPosts = await Post.findAll({
    where: { user_id },
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
  });

  const posts = findUserPosts.map((post) => post.get({ plain: true }));
  res.render('create-post', { posts, loggedIn: true });
});

exports.editUserPost = catchAsync(async (req, res, next) => {
  const id = req.params.id;

  const findUserPost = await Post.findOne({
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
  });

  // Error handler for when ID does not exist
  if (!findUserPost) {
    return next(new AppError('No Post found with that ID', 404));
  }

  const post = findUserPost.get({ plain: true });
  res.render('edit-post', {
    post,
    loggedIn: true,
  });
});
