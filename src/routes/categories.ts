import * as CategoryController from "../controllers/categoryController";
import { Router } from 'express';
const router = Router();

router.get('/categories/:_id', CategoryController.getCategory);

export default router;