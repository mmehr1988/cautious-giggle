const { Comment } = require('./../models');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

////////////////////////////////////////////////////////////
// GET ALL COMMENTS
////////////////////////////////////////////////////////////

exports.getAllComments = catchAsync(async (req, res, next) => {
  const dbCommentDataAll = await Comment.findAll({});

  res.status(200).json(dbCommentDataAll);
});

////////////////////////////////////////////////////////////
// CREATE COMMENT
////////////////////////////////////////////////////////////

exports.createComment = catchAsync(async (req, res, next) => {
  const comment_text = req.body.comment_text;
  const post_id = req.body.post_id;
  const user_id = req.session.user_id;
  if (req.session) {
    const dbCommentCreate = await Comment.create({ comment_text, post_id, user_id });
    res.status(200).json(dbCommentCreate);
  }
});

////////////////////////////////////////////////////////////
// DELETE COMMENT
////////////////////////////////////////////////////////////

exports.deleteComment = catchAsync(async (req, res, next) => {
  const id = req.params.id;

  const dbCommentDelete = Comment.destroy({ where: { id } });

  // Error handler for when ID does not exist
  if (!dbCommentDelete) {
    return next(new AppError('No Comment found with that ID', 404));
  }

  res.status(200).json(dbCommentDelete);
});
