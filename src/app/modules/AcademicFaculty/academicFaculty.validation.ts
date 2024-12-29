import { z } from 'zod';

const academicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'the faculty name must be string !',
    }),
  }),
});

const updateAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'the faculty name must be string !',
    }),
  }),
});

export const createFacultyValidation = {
  academicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema
};
