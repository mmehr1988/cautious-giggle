const router = require('express').Router();
const apiRoutes = require('./api');
const AppError = require('../utils/appError');
const globalErrorHandler = require('./errorController');

const homeRoutes = require('./homeRoutes.js');
const dashboardRoutes = require('./dashboardRoutes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

// MIDDLEWARE: UNHANDLED ROUTES
router.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl}`, 404));
});

// MIDDLEWARE: GLOBAL ERROR HANDLER
router.use(globalErrorHandler);

module.exports = router;
