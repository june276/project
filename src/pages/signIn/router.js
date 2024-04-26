import express from 'express'
import {signIn} from './controller.js';

const router = express.Router();
router.post('/signIn', signIn);

export default router;