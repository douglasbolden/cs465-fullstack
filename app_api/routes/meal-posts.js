const express = require('express');
const router = express.Router();
const controller = require('../controllers/meal-posts');

router.get('/:mealPostCode?', controller.fetchMealPosts);

module.exports = router;