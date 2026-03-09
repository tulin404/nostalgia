import express from 'express';
import registerController from '../controllers/registerController.js';
import registerMiddleware from '../middlewares/registerMiddleware.js';
/*import loginController from '../controllers/loginController.js';*/

export const authRouter = express.Router();

authRouter.post('/register', registerMiddleware, registerController);
/*authRouter.post('login', loginController);*/
