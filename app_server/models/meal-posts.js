const mongoose = require('mongoose');

// Define the meal schema
const mealSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    mealName: { type: String, required: true, index: true },
    mealType: { type: String, required: true, index: true },
    image: { type: String, required: true },
    link: { type: String},
    description: { type: String, required: true }
});

mongoose.model('meal-posts', mealSchema);