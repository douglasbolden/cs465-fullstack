const express = require('express');
const router = express.Router();
const controller = require('../controllers/meal-posts');
const { expressjwt: jwt } = require('express-jwt');

const auth = jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS512'] });

router.get('/:mealCode?', controller.fetchMealPosts);
router.post('/', auth, controller.addMealPost);
router.put('/:mealCode', auth, controller.updateMealPost);
router.delete('/:mealCode', auth, controller.deleteMealPost);

module.exports = router;