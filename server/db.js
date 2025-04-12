const mongoose = require('mongoose')


const Connection = async () => {
    const mongoURI = process.env.MONGO_URI
    await mongoose.connect(mongoURI)
    .then(() => console.log("connected"))
    .catch(err => console.log(err))
}

module.exports = Connection