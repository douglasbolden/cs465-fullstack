const mongoose = require('mongoose');
const blogPosts = mongoose.model('blog-posts');

const fetchBlogPosts = async (req, res) => {
    if (!!req.params.blogCode) {
        try {
            res.json(await blogPosts.findOne({ 'code': req.params.blogCode}));
        } catch (e) {
            res.status(404).send(`No blogPost found for code ${req.params.blogCode}`);
        }
        return;
    }
    res.json(await blogPosts.find({}));
};

const addBlogPost = async (req, res) => {
    const newBlogPost = req.body;

    if (!newBlogPost) {
        // 400 BAD REQUEST error because no BlogPost was sent
        res.status(400).send('No blogPost record found in body of request');
        return;
    }

    try {
        const savedBlogPost = await blogPosts.create(newBlogPost);

        // 201 CREATED response with the blogPost -- we send it back because it will have the MongoDB _id now
        res.status(201).json(savedBlogPost);
    } catch (e) {
        //400 BAD REQUEST because we failed to create the blogPost
        res.status(400).json(e);
    }
};

const updateBlogPost = async (req, res) => {
    const blogCode = req.params.blogCode;
    let blogPost = req.body;

    // The blogCode in /api/blogPosts/:blogCode and the blogCode of the request body may not match...
    // Overwrite the one in the body with the one in the URL
    blogPost = Object.assign(blogPost, {blogCode});

    try {
        const updatedBlogPost = await blogPosts.findOneAndUpdate({'code': blogCode}, blogPost, {new: true});

        //null indicates no match was found...return 404 NOT FOUND
        if (updatedBlogPost == null) {
            res.status(404).send({message: `No blogPost was found for code: ${blogCode}`});
            return;
        }

        res.status(200).json(updatedBlogPost);
    } catch (e) {
        res.status(500).json(2);
    }
}

const deleteBlogPost = async (req, res) => {
    try {
        if (!req.params.blogCode) {
            // If no :blogCode is provided, send a 400 BAD REQUEST error
            res.status(400).send(':blogCode is a required parameter');
            return;
        }

        //deleteOne() returns 1 if successful, 0 if not
        if ((await blogPosts.deleteOne({ 'code': req.params.blogCode })) < 0) {
            //No blogPost was found with the :blogCode, return a 404 NOT FOUND error
            res.status(404).send(`No blogPost found with blogCode ${req.params.blogCode}`);
            return;
        }
        res.status(200).send();
    } catch (e) {
        res.status(500).json(e);
    }
};

module.exports = {
    fetchBlogPosts,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost
};