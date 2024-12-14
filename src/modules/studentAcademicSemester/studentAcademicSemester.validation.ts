import { string, z } from 'zod';
import {
  MonthArray,
  NameOftheSemester,
  SemesterCode,
} from './studentAcademicSemester.constant';
import { TAcademicSemesterName } from './studentAcademicSemester.interface';

const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...NameOftheSemester] as [string, ...string[]]),
    code: z.enum([...SemesterCode] as [string, ...string[]]),
    year: z.string(),
    startMonth: z.enum([...MonthArray] as [string, ...string[]]),
    endMonth: z.enum([...MonthArray] as [string, ...string[]]),
  }),
});

export const createAcademicSemesterValidation = {
  createAcademicSemesterValidationSchema,
};
