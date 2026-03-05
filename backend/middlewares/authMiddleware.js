import jwt from 'jsonwebtoken';
import 'dotenv/config';

export default async function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'No authorization header.' });
    };
    if (!authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: 'Incorrect auth type.' })
    };

    const token = authHeader.split(" ")[1];
    
    try {
        const payload = jwt.verify(token, process.env.ACCESS_SECRET);
        req.user = payload;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid or expired token.' });
    };
};