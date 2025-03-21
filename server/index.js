import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
import connectDB from './lib/databaseConnection.js';

dotenv.config();
connectDB(); // Call the function to connect to MongoDB

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
