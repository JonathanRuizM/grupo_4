import dotenv from 'dotenv';
import mongoose from 'mongoose';


dotenv.config();


const conectionDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('base de datos conectada');
    }catch (error) {
        console.error('error al conectar la base de datos', error);
    }
};      


export default conectionDB;