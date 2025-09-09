const express = require('express');
const router = express.Router();
const foodPartnerController = require('../controllers/food-partner.controller');

router.post('/profile', foodPartnerController.createProfile);
router.get('/profile', foodPartnerController.getProfile);

module.exports = router;
