import express from 'express';
import { getAllJobs, createJob, getJobById, updateJob, deleteJob } from '../controllers/jobController.js';
import { authenticateUser } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllJobs);
router.get('/:id', getJobById);
router.post('/', authenticateUser, createJob);
router.put('/:id', authenticateUser, updateJob);
router.delete('/:id', authenticateUser, deleteJob);

export default router;