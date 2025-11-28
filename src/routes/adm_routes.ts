import { Router} from 'express';
import { show_adm } from '../controller/adm_controller';
import { authMiddleware } from '../middlewares/authmiddleware';

const admRoutes = Router();

admRoutes.get('/adm', authMiddleware ,show_adm);

export {
    admRoutes
}