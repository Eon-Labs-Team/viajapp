import { Router } from 'express';
import { list, listByUserId, insert, update, deletePost, getById } from '../controllers/post.controller';

class PostRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.get('/', list);
        this.router.get('/listByUserId/:userId', listByUserId);
        this.router.get('/:id', getById);
        this.router.post('/', insert);
        this.router.patch('/:userId', update);
        this.router.delete('/:id', deletePost);
    }
}

const postRoutes = new PostRoutes();
export default postRoutes.router;