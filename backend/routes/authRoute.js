import express from 'express';
import registerController from '../controllers/registerController.js';
/*import loginController from '../controllers/loginController.js';*/

export const authRouter = express.Router();

authRouter.post('/register', registerController);
/*authRouter.post('login', loginController);*/
