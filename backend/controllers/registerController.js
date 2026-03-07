import bcrypt from 'bcryptjs';
import { pool } from '../db/pg.js';
import validator from 'validator';

export default async function registerController(req, res) {

    let { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: "Por favor, preencha todos os campos." });
    };

    username = req.body.username.trim();
    email = req.body.email.trim();
    
    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: "Email inválido." })
    };
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    
    if (!passwordRegex.test(password)) {
        return res.status(422).json({ error: "Senha deve conter no mínimo 8 caracteres, uma letra maiúscula e minúscula, um número e caractere especial." });
    };
    
    const exists = await pool.query(`SELECT * FROM users WHERE username = $1 OR email = $2`,
        [username, email]
    );
    
    if (exists.rows.length > 0) {
        return res.status(422).json({ error: "Não foi possível criar o usuário." });
    };
    
    const passwordHash = await bcrypt.hash(req.body.password.trim(), 10);

    try {
        await pool.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`,
            [username, email, passwordHash]
        );

        return res.json({ message: "Usuário registrado." });
    } catch(error) {
        return res.json({ error: error.message });
    };
};