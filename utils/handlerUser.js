const { User, Post, Comment } = require('./../models');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

////////////////////////////////////////////////////////////
// GET ALL USERS
////////////////////////////////////////////////////////////

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const dbUserDataAll = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  res.status(200).json(dbUserDataAll);
});

////////////////////////////////////////////////////////////
// GET ONE USER
////////////////////////////////////////////////////////////

exports.getOneUsers = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const dbUserDataOne = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { id },
    include: [
      {
        model: Post,
        attributes: ['id', 'title', 'post_content', 'created_at'],
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'created_at'],
        include: {
          model: Post,
          attributes: ['title'],
        },
      },
    ],
  });

  // Error handler for when ID does not exist
  if (!dbUserDataOne) {
    return next(new AppError('No User found with that ID', 404));
  }

  res.status(200).json(dbUserDataOne);
});

////////////////////////////////////////////////////////////
// CREATE USER
////////////////////////////////////////////////////////////

exports.createUser = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const { username, email, password } = req.body;
  const createOneUser = await User.create({ username, email, password });

  createOneUser.id = id;

  await req.session.save(() => {
    req.session.user_id = createOneUser.id;
    req.session.username = createOneUser.username;
    req.session.loggedIn = true;
  });
  res.status(201).json(createOneUser);
});

////////////////////////////////////////////////////////////
// LOGIN USER
////////////////////////////////////////////////////////////

exports.loginUser = catchAsync(async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const dbUserData = await User.findOne({ where: { email } });

  // Error handler for when ID does not exist
  if (!dbUserData) {
    return next(new AppError('No User found with that Email', 404));
  }

  const validPassword = dbUserData.checkPassword(password);

  if (!validPassword) {
    return next(new AppError('Invalid Password', 404));
  }

  req.session.save(() => {
    // declare session variables
    req.session.user_id = dbUserData.id;
    req.session.username = dbUserData.username;
    req.session.loggedIn = true;
    res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
  });
});

////////////////////////////////////////////////////////////
// LOGOUT USER
////////////////////////////////////////////////////////////

exports.logoutUser = catchAsync(async (req, res, next) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
