import { z } from 'zod';

const userValidationSchema = z.object({
  id: z.string(),
  password: z
    .string()
    .max(20, { message: 'Password can not be more than 20 words !' }),
  needsPasswordChange: z.boolean().optional().default(true),
  role: z.enum(['student', 'faculty', 'admin']),
  status: z.enum(['in-progess', 'blocked']).default('in-progess'),
  isDeleted: z.boolean().optional().default(false),
});

export const userValidation = {
  userValidationSchema,
};
