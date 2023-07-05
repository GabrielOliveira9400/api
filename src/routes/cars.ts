import * as CarController from "../controllers/carController";
import { Router } from 'express';
const router = Router();

router.get('/cars', CarController.allCars);
router.get('/cars/:_id', CarController.getCar);
router.post('/cars', CarController.addCar);
router.delete('/cars/:_id', CarController.removeCar);

export default router;