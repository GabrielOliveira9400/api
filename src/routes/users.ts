import * as UserController from "../controllers/userController";
import { Router } from 'express';
const router = Router();

router.get('/users', UserController.allUsers);
router.get('/users/:_id', UserController.getUser);
router.post('/users', UserController.addUser);
router.delete('/users/:_id', UserController.removeUser);

export default router;