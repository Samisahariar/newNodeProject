import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'password must be string !',
    })
    .max(20, { message: 'Password can not be more than 20 words !' })
    .optional(),
});

export const userValidation = {
  userValidationSchema,
};
