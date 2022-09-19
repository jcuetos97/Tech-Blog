// Dependencies declared
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers/');

// Setting up PORT and app
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Handlebars 
const hbs = exphbs.create({ helpers: {
  postDate: date => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }
}
  
 });

// Default engine and extension provided
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public folder is static
app.use(express.static(path.join(__dirname, '/public')));

// Routes
app.use(routes);

// Turn on server and connection to database
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening in http://localhost:${PORT}`))
}); 