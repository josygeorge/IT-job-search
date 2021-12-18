import express from 'express';
const router = express.Router();
import Users from '../models/users.js';

import { register, login, updateUser } from '../controllers/usersController.js';

router.post('/register', register);
router.post('/login', login);
router.post('/update', updateUser);

// module.exports = router;
export default router;