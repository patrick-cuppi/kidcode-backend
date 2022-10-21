import express from 'express';

import { getCourses, createCourse } from '../controllers/courseController.js';

// import { login } from '../controllers/authController.js';
// import {
//   getAll,
//   getAllNoAuth,
//   createUser,
//   updateUserById,
//   deleteUserById
// } from '../controllers/userController.js';

const router = express.Router();

router.get('/all', getCourses);
router.post('/', createCourse);
// router.get('/all', getAll);
// router.post('/create', createUser);
// router.post('/login', login);
// router.patch('/update/:id', updateUserById);
// router.delete('/delete/:id', deleteUserById);

export default router;
