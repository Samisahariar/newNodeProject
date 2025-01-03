import express from 'express';
import { studentController } from './students.controller';

const router = express.Router();

/* router.post('/create_student', studentController.);  */

router.get('/', studentController.getAllStudentCon);

router.get('/:id', studentController.getSingleStudentInfo);

export const StudentRouters = router;
