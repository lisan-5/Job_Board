import express from 'express';
import { getJobs, createJob, getJobById } from '../controllers/jobController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getJobs);
router.post('/', protect, createJob);
router.get('/:id', getJobById);

export default router;