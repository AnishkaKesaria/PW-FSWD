const mongoose = require('mongoose')

const connectToDb = async () => {
    //TODO
    mongoose.connect(process.env.MONGO_URL)
    .then((conn)=>{console.log(`Connected to DB: ${conn.connection.host}`);})
    .catch((err)=>{console.log("ERROR: ",err)
process.exit(1)});
}

module.exports = connectToDb