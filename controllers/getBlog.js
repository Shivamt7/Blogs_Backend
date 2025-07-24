const Blog = require('../models/blog')

exports.getBlog = async(req, res) => {
    try {
        const getblog = await Blog.find({})

        res.status(200)
        .json({
            success: true,
            data: getblog,
            message: 'Successfully fetched all data'
        })
    } catch (error) {
        console.error(error)
        res.status(500)
        .json({
            success: false,
            data: 'Internal Server Error',
            message: error.message
        })
    }
}



exports.getBlogById = async (req, res) => {
    try {
        const { id } = req.params

        const getblogbyid = await Blog.findById({_id: id})

        res.status(200)
        .json({
            success: true,
            data: getblogbyid,
            message: `Data is fetched of Given ${ id }`
        })
    } catch (error) {
        console.error(error)
        res.status(500)
        .json({
            success: false,
            data: 'Internal Server Error',
            message: error.message
        })
    }
}