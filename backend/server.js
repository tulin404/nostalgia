import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}));

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});