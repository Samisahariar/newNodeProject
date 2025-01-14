import express from 'express';
import { studentController } from './students.controller';

const router = express.Router();

/* router.post('/create_student', studentController.);  */

router.get('/', studentController.getAllStudentCon);

router.get('/:id', studentController.getSingleStudentInfo);

router.delete('/:id', studentController.deleterSingleStudentController)

export const StudentRouters = router;
