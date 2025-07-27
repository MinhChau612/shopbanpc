

import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        if(conn) {
            console.log(`MongoDB connected successfully`);
        }
    } catch (error) {
        console.log('Database connection failed:', error);
        process.exit(1); // Exit the process with failure
    }
}

export default dbConnect;