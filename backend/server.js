import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { initDB } from './db/initDB.js';
import { authRouter } from './routes/authRoute.js';

const app = express();

app.use(express.json());

app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}));

initDB();

app.use('/auth', authRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});