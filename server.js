// Dependencies declared
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./controllers');
const sequelize = require('./config/connection');

// Setting up PORT and app
const app = express();
const PORT = process.env.PORT || 3001;

// Handlebars 
const hbs = exphbs.create({ helpers});

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public folder is static
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(routes);

// Turn on server and connection to database
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening in http://localhost:${PORT}`))
}); 