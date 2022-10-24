import express from 'express';

import {
  getCourses,
  createCourse,
  getCourseById
} from '../controllers/courseController.js';

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
router.post('/create', createCourse);
router.get('/:id', getCourseById);
// router.post('/create', createUser);
// router.post('/login', login);
// router.patch('/update/:id', updateUserById);
// router.delete('/delete/:id', deleteUserById);

export default router;
