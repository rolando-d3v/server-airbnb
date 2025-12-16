import {Router} from 'express';
import { createRenta, allRenta, updateRenta, deleteRenta } from './renta.controller';


const router = Router();

router.post('/create-renta', createRenta);
router.get('/get-renta', allRenta);
router.put('/update-renta', updateRenta);
router.delete('/delete-renta', deleteRenta);

export default router;
