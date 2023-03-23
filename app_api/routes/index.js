const express = require('express');
const router = express.Router();
const blogsRouter = require('./blog-posts');
const latestRouter = require('./latest-posts');
const mealsRouter = require('./meal-posts');
const newsRouter = require('./news-posts');
const roomsRouter = require('./rooms');
const testimonialsRouter = require('./testimonials');
const tripsRouter = require('./trips');

router.use('/blogs', blogsRouter);
router.use('/latest', latestRouter);
router.use('/meals', mealsRouter);
router.use('/news', newsRouter);
router.use('/rooms', roomsRouter);
router.use('/testimonials', testimonialsRouter);
router.use('/trips', tripsRouter);

module.exports = router;