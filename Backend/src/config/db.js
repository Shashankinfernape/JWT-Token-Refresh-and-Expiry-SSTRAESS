// backend/src/config/db.js
import mongoose from 'mongoose';
import logger from './logger.js';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error('MongoDB connection failed', error);
    process.exit(1);
  }
};

export default connectDB;