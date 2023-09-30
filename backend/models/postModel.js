const mongoose = require('mongoose')
const postSchema = mongoose.Schema(
    {
        message : {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        likers: {
            type: [String]
        },
        stars: {
            type: Number, min: 0, max: 5
        }
    },
    {
        timestamps:true
    }

)
module.exports = mongoose.model('post', postSchema)