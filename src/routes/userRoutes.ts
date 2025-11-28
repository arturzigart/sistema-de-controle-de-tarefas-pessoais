import { Router} from 'express';
import { cadastrar, login, show_login } from '../controller/user.controllers';

const usuarioRoutes = Router();

usuarioRoutes.get('/usuario/login', show_login);
usuarioRoutes.post('/usuario/email', cadastrar);
usuarioRoutes.post('/usuario/login', login);


export {
    usuarioRoutes
}