const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

const MONGO_DB = process.env.DATABASE;


dbConnect();

async function dbConnect() {
    try {
        await mongoose.connect(
            MONGO_DB,
            { useNewUrlParser: true }
        );
        console.log('MONGO DB connected');

    } catch (error) {
        console.log(`Conection Error: ${error}`);

    }
}

module.exports = mongoose;