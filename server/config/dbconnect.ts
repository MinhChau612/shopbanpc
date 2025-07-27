

import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI environment variable is not defined');
        }
        const conn = await mongoose.connect(process.env.MONGO_URI as string);
        if(conn) {
            console.log(`MongoDB connected successfully`);
        }
    } catch (error) {
        console.log('Database connection failed:', error);
        process.exit(1); // Exit the process with failure
    }
}

export default dbConnect;