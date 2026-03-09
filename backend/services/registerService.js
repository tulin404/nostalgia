import HttpError from "../classes/HttpError.js";
import bcrypt from "bcryptjs";
import { pool } from '../db/pg.js';

export default async function registerUser({ username, email, password }) {
    username = username.trim();
    email = email.trim();
    password = password.trim();
    
    const exists = await pool.query(`SELECT * FROM users WHERE username = $1 OR email = $2`,
        [username, email]
    );
    
    if (exists.rows.length > 0) {
        throw new HttpError(422, "Não foi possível criar o usuário.");
    };
    
    const passwordHash = await bcrypt.hash(password.trim(), 10);


    await pool.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`,
        [username, email, passwordHash]
    );
    return { message: "Usuário registrado." };
};