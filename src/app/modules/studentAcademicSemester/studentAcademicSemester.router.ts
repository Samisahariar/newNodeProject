import express from 'express';
import catchValidation from '../../middlewares/validationResponse';
import { createAcademicSemesterValidation } from './studentAcademicSemester.validation';
import { AcademicSemesterControllers } from './studentAcademicSemester.controller';

const router = express.Router();

router.post(
  '/create-academic-semester',
  catchValidation(
    createAcademicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);

router.get('/:id', AcademicSemesterControllers.getTheSingleSemesterController);

router.get("/", AcademicSemesterControllers.getAllTheSemester)


export const AcademicSemesterRouter = router;
