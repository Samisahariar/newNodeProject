import { z } from 'zod';

const academicFacultyValidationSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'the faculty name must be string !',
    })
});

export const userValidation = {
  academicFacultyValidationSchema
};