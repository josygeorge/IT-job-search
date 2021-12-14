import express from 'express';
const router = express.Router();
import Users from '../models/users.js';

import { register } from '../controllers/usersController.js';

router.post('/register', register);
router.post('/login', async (req, res) => {
    try {
        const user = await Users.findOne({
            userName: req.body.userName,
            password: req.body.password
        });
        if (user) {
            res.send(user);
        }
        else {
            return res.status(400).json('Invalid Credentials!');
        }

    } catch (error) {
        return res.status(400).json({ error });
    }
});

// module.exports = router;
export default router;