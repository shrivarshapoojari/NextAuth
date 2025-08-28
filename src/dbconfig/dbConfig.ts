import mongoose from 'mongoose';

const connectToDatabase = async (): Promise<void> => {
    try {
        const dbUri = process.env.MONGO_URI !
        await mongoose.connect(dbUri);
        console.log('Connected to the database successfully');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1); // Exit process with failure
    }
};

export default connectToDatabase;