import * as CategoryController from "../controllers/categoryController";
import { Router } from 'express';
const router = Router();

router.get('/cateogries/:_id', CategoryController.getCategory);

export default router;