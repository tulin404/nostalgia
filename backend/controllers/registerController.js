import registerUser from '../services/registerService.js';

export default async function registerController(req, res) {
    try {
        const result = await registerUser(req.body);
        return res.status(201).json(result);
    } catch (error) {
        res.status(error.code).json({ error: error.message });
    };
};