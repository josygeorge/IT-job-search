import mongoose from 'mongoose';
import dotenv from 'dotenv';
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
        console.log(`Connection Error: ${error}`);
        process.exit(1);
    }
}

export default mongoose;