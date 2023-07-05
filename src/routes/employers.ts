import * as EmployerController from "../controllers/employerController";
import { Router } from 'express';
const router = Router();

router.get('/employer', EmployerController.allEmployers);
router.get('/employer/:_id', EmployerController.getEmployer);
router.post('/employer', EmployerController.addEmployer);
router.delete('/employer/:_id', EmployerController.removeEmployer);

export default router;