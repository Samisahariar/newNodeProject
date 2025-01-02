import express from 'express';
import catchValidation from '../../middlewares/validationResponse';
import { createDepartmentValidation } from './academicDepartment.validation';
import { AcademicFacultyControllers } from '../AcademicFaculty/academicFaculty.controller';
import { AcademicDepartmentControllers } from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/create-academic-Department',
  catchValidation(
    createDepartmentValidation.academicDepartmentValidationSchema
  ),
  AcademicDepartmentControllers.createAcademicDepartment,
);

router.get('/:id', AcademicDepartmentControllers.getTheSingleDepartmentController);

router.patch('/:id', catchValidation(createDepartmentValidation.updateAcademicDepartmentValidationSchema), AcademicDepartmentControllers.updateTheSingleDepartment);

router.get("/", AcademicDepartmentControllers.getAllTheDepartment)

export const AcademicDepartmentRouter = router;
