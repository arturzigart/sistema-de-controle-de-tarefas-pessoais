import { Router} from 'express';
import { email, show_login } from '../controller/user.controller';

const userRoutes = Router();

userRoutes.get('/user/login', show_login);
userRoutes.post('/user/email', email);


export {
    userRoutes
}