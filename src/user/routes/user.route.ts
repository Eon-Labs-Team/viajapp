import { Router } from 'express';
import { list, insert, update, deleteUser, getById, passwordRecovery, newPasswordByToken } from '../controllers/user.controller';
import { validJWTNeeded } from '../../shared/middlewares/jwt.validation.middleware';

class UserRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.get('/', validJWTNeeded,list);
        this.router.post('/', insert);
        this.router.post('/passwordRecovery', passwordRecovery);
        this.router.post('/newPasswordByToken', newPasswordByToken);
        this.router.patch('/:id', validJWTNeeded,update); 
        this.router.delete('/:id', validJWTNeeded, deleteUser);
        this.router.get('/:id', getById);
    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;