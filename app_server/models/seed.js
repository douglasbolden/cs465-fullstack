const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const blogSeed = async function() {
    // Seed BLOG-POSTS
    const blogs = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/blog-posts.json'), 'utf8'));
    const blog = mongoose.model('blog-posts');
    await blog.deleteMany();
    await blog.insertMany(blogs);
}

const latestSeed = async function() {
    // Seed LATEST
    const latest = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/latest-posts.json'), 'utf8'));
    const late = mongoose.model('latest-posts');
    await late.deleteMany();
    await late.insertMany(latest);
}

const mealSeed = async function() {
    // Seed MEALS
    const meals = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/meal-posts.json'), 'utf8'));
    const meal = mongoose.model('meal-posts');
    await meal.deleteMany();
    await meal.insertMany(meals);
}

const newsSeed = async function() {
    // Seed NEWS
    const newsPosts = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/news-posts.json'), 'utf8'));
    const news = mongoose.model('news-posts');
    await news.deleteMany();
    await news.insertMany(newsPosts);
}

const pageSeed = async function() {
    // Seed PAGES
    const pages = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/pages.json'), 'utf8'));
    const page = mongoose.model('pages');
    await page.deleteMany();
    await page.insertMany(pages);
}

const roomSeed = async function() {
    // Seed NEWS
    const rooms = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/rooms.json'), 'utf8'));
    const room = mongoose.model('rooms');
    await room.deleteMany();
    await room.insertMany(rooms);
}

const testimonialSeed = async function() {
    // Seed TESTIMONIALS
    const testimonials = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/testimonials.json'), 'utf8'));
    const testimonial = mongoose.model('testimonials');
    await testimonial.deleteMany();
    await testimonial.insertMany(testimonials);
}

const tripSeed = async function() {
    // Seed TRIPS
    const trips = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/trips.json'), 'utf8'));
    const trip = mongoose.model('trips');
    await trip.deleteMany();
    await trip.insertMany(trips);
}

const tipSeed = async function() {
    // Seed TIPS
    const tips = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/vacation-tips.json'), 'utf8'));
    const tip = mongoose.model('vacation-tips');
    await tip.deleteMany();
    await tip.insertMany(tips);
}

module.exports = { blogSeed, latestSeed, mealSeed, newsSeed, pageSeed, roomSeed, testimonialSeed, tripSeed, tipSeed };