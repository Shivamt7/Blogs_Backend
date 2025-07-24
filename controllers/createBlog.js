const Blog = require('../models/blog')


exports.createBlog = async(req, res) => {
    try {
        const { title, description, content } = req.body;

        const blogCreate = await Blog.create({title, description, content})

        res.status(200)
        .json({
            success: true,
            data: blogCreate,
            message: 'Successfully Created'
        })
    } catch(error) {
        console.error(error)
        res.status(500)
        .json({
            success: false,
            data: 'Internal Server Error',
            message: error.message
        })
    }
}