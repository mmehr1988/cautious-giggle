const express = require('express');
const morgan = require('morgan');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');

const helpers = require('./utils/helpers');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

const session = require('express-session');

const app = express();

/////////////////////////////////////////////
// Morgan Middleware
app.use(morgan('dev'));
/////////////////////////////////////////////

const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'abdullahsaint',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
    checkExpirationInterval: 5 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
    expiration: 15 * 60 * 1000, // The maximum age (in milliseconds) of a valid session.
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

/////////////////////////////////////////////
// MIDDLEWARE: REQUEST TIME
/////////////////////////////////////////////

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

/////////////////////////////////////////////
app.use(routes);

/////////////////////////////////////////////
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));
});
