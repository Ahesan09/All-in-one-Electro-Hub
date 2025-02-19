// It will connect the database to the server
const mongoose = require('mongoose')

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to MongoDB')
    }
    catch(err){
        console.log(err)
    }
}
module.exports = connectDB;