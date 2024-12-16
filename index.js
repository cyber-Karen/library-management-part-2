import express from "express"
import dotenv from "dotenv";
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import bookRoutes from './routes/book.route.js';
import borrowRoutes from './routes/borrow.route.js';
import { connectDb } from "./config/db.js";
dotenv.config();


const app = express();

connectDb();

const port = process.env.PORT;

//Register Route
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/borrows', borrowRoutes);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
