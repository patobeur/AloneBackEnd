const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set('strictQuery',false),
        mongoose.connect(process.env.DB_URI)
    }
    catch (e) {
        console.log(e);
        process.exit();
    }
}
module.exports = connectDB