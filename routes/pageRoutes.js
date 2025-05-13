// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

// Link routes to controller methods
router.get('/', mainController.home);
router.get('/about', mainController.about);
router.get('/events', mainController.events);
router.get('/contact', mainController.contact);
router.get('/thankyou', mainController.thankyou);

router.use(express.urlencoded({ extended: true }));
router.post('/contact', mainController.submitContact);

module.exports = router;
