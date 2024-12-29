import express from 'express';
import catchValidation from '../../middlewares/validationResponse';
import { createFacultyValidation } from './academicFaculty.validation';
import { AcademicFacultyControllers } from './academicFaculty.controller';


const router = express.Router();

router.post(
  '/create-academic-faculty',
  catchValidation(
    createFacultyValidation.academicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.createAcademicFaculty,
);

router.get('/:id', AcademicFacultyControllers.getTheSingleFacultyController);

router.patch('/:id', AcademicFacultyControllers.updateTheSingleFaculty);

router.get("/", AcademicFacultyControllers.getAllTheFaculty)

export const AcademicFacultyRouter = router;
