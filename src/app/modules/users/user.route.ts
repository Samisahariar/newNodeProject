import { UserController } from './user.controller';
import { Router } from 'express';
import { studentValidations } from '../students/student.validationZod';
import catchValidation from '../../middlewares/validationResponse';

const router = Router();

router.post(
  '/create-student',
  catchValidation(studentValidations.studentValidationSchema),
  UserController.createUser,
);

export const UserRoute = router;
