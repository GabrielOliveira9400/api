import * as ClientController from "../controllers/clientController";
import { Router } from 'express';
const router = Router();

router.get('/clients', ClientController.allClients);
router.get('/clients/:_id', ClientController.getClient);
router.post('/clients', ClientController.addClient);
router.delete('/clients/:_id', ClientController.removeClient);

export default router;