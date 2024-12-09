import express from 'express';
import catchValidation from '../../app/middlewares/validationResponse';
import { createAcademicSemesterValidation } from './studentAcademicSemester.validation';
import { AcademicSemesterControllers } from './studentAcademicSemester.controller';

const router = express.Router();

router.post("/create-academic-semester",catchValidation(createAcademicSemesterValidation.createAcademicSemesterValidationSchema), AcademicSemesterControllers.createAcademicSemester)

export const AcademicSemesterRouter = router
