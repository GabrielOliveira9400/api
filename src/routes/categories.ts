import * as CategoryController from "../controllers/categoryController";
import { Router } from 'express';
const router = Router();

router.get('/categories/:_id', CategoryController.getCategory);
router.get('/categories/cars/:_slug', CategoryController.carsByCategory);

export default router;