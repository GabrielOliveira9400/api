import * as ReserveController from "../controllers/reserveController";
import { Router } from 'express';
const router = Router();

router.get('/reserves/:email', ReserveController.reserveByEmail);
router.get('/reserves/:_id', ReserveController.getReserve);
router.post('/reserves', ReserveController.addReserve);

export default router;