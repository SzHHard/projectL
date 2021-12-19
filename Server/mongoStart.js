const mongoose = require('mongoose')

const connectToMongoDB = async () => {

    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }
    catch (err) {
        console.log('myerr: ' + err)
    }
}

module.exports = connectToMongoDB;