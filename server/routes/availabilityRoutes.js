import { Router } from 'express';
const router = Router();
import { addAvailability, updateAvailability, deleteAvailability, getAvailability } from '../controllers/availabilityController.js';

router.post('/', addAvailability);
router.put('/', updateAvailability);
router.delete('/', deleteAvailability);
router.get('/', getAvailability);

export default router;
