import { Router} from 'express';
import { email, login, show_login } from '../controller/user.controllers';

const usuarioRoutes = Router();

usuarioRoutes.get('/usuario/login', show_login);
usuarioRoutes.post('/usuario/email', email);
usuarioRoutes.post('/usuario/login', login);


export {
    usuarioRoutes
}