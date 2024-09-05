import { Router } from 'express';
const router = Router();
import { createSession, getSessions } from '../controllers/sessionController.js';

router.post('/', createSession);
router.get('/', getSessions);

export default router;
