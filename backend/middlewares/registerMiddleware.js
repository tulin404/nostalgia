import { registerSchema } from "../schemas.js";

export default function registerMiddleware (req, res, next) {
    const valid = registerSchema.safeParse(req.body);

    if (!valid.success) {
        return res.status(400).json(valid.error.issues);
    };

    next();
};