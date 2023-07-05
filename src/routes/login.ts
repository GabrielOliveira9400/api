import * as loginController from "../controllers/loginController";
import { Router } from 'express';
const router = Router();

router.post('/login', loginController.login);

export default router;