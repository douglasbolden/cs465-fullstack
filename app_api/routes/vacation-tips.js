const express = require('express');
const router = express.Router();
const controller = require('../controllers/vacation-tips');
const { expressjwt: jwt } = require('express-jwt');

const auth = jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS512'] });

router.get('/:tipCode?', controller.fetchTips);
router.post('/', auth, controller.addTip);
router.put('/:tipCode', auth, controller.updateTip);
router.delete('/:tipCode', auth, controller.deleteTip);

module.exports = router;