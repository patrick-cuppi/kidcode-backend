import express from 'express';

import { getAllAdmins, createAdmin } from '../controllers/adminController.js';

// import { login } from '../controllers/authController.js';
// import {
//   getAll,
//   getAllNoAuth,
//   createUser,
//   updateUserById,
//   deleteUserById
// } from '../controllers/userController.js';

const router = express.Router();

router.get('/all', getAllAdmins);
router.post('/create', createAdmin);
// router.get('/all', getAll);
// router.post('/create', createUser);
// router.post('/login', login);
// router.patch('/update/:id', updateUserById);
// router.delete('/delete/:id', deleteUserById);

export default router;
