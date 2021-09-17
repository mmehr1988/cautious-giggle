const { Post, User, Comment } = require('./../models');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

////////////////////////////////////////////////////////////
// GET ALL POSTS
////////////////////////////////////////////////////////////

exports.getAllPosts = catchAsync(async (req, res, next) => {
  const findAllPosts = await Post.findAll({
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

  res.status(200).json(findAllPosts);
});

////////////////////////////////////////////////////////////
// GET ONE POST
////////////////////////////////////////////////////////////

exports.getOnePost = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const findOnePost = await Post.findOne({
    where: { id },
    attributes: ['id', 'title', 'created_at', 'post_content'],
    include: [
      {
        model: User,
        attributes: ['username'],
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
    ],
    order: [[{ model: Comment }, 'created_at', 'DESC']],
  });

  // Error handler for when ID does not exist
  if (!findOnePost) {
    return next(new AppError('No Post found with that ID', 404));
  }

  res.status(200).json(findOnePost);
});

////////////////////////////////////////////////////////////
// CREATE POST
////////////////////////////////////////////////////////////

exports.createPost = catchAsync(async (req, res, next) => {
  const user_id = req.session.user_id;
  const { title, post_content } = req.body;
  const createOnePost = await Post.create({ title, post_content, user_id });
  res.status(201).json(createOnePost);
});

////////////////////////////////////////////////////////////
// UPDATE POST
////////////////////////////////////////////////////////////

exports.editPost = catchAsync(async (req, res, next) => {
  const title = req.body.title;
  const post_content = req.body.post_content;
  const id = req.params.id;

  const updatePost = Post.update(
    { title, post_content },
    {
      where: { id },
    }
  );

  // Error handler for when ID does not exist
  if (!updatePost) {
    return next(new AppError('No Post found with that ID', 404));
  }
  res.status(201).json(updatePost);
});

exports.deletePost = catchAsync(async (req, res, next) => {
  const findOnePost = await Post.findOne({
    where: { id: req.params.id },
    include: [Comment],
  });

  findOnePost.comments.forEach((comment) => {
    comment.destroy();
  });

  findOnePost.destroy();
  res.end();
});
