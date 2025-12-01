import {Router} from 'express';
import { allUser } from './user.controller';
import { idUser } from './user.controller';

const router = Router();

router.get('/all-user', allUser);
router.get('/id-user', idUser);

export default router;
