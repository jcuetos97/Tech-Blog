const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const dashbRoutes = require('./dashboard-routes.js');
const apiRoutes = require('./api');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashbRoutes);

module.exports = router; 