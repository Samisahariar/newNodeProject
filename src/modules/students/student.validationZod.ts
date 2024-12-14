import { z } from 'zod';

// Name schema
const studentNameSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, 'first Name is Required !!')
    .refine((value) => value.charAt(0) === value.charAt(0).toUpperCase(), {
      message: 'First name must start with a capital letter',
    }),
  middleName: z.string().min(1, 'Middle name is required'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: 'Last name must contain only alphabetic characters',
    }),
});

// Local guardian schema
const localGuardianSchema = z.object({
  localGuardianName: z.string().min(1, 'Local guardian name is required'),
  localGuardianNo: z.string().min(1, 'Local guardian number is required'),
  localGuardianAdd: z.string().min(1, 'Local guardian address is required'),
});

// Guardian schema
const guardianSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required"),
  fatherContactNo: z.string().min(1, "Father's contact number is required"),
  fatherOccupation: z.string().min(1, "Father's occupation is required"),
  motherName: z.string().min(1, "Mother's name is required"),
  motherOccupation: z.string().min(1, "Mother's occupation is required"),
  motherContactNO: z.string().min(1, "Mother's contact number is required"),
});

// Main student schema
const studentValidationSchema = z.object({
  body: z.object({
    password: z
      .string()
      .min(4, 'the password should have atleast 4 character !'),
    student: z.object({
      id: z.string().min(1, 'Student ID is required'),
      password: z.string().max(20).optional(),
      user: z.string().min(1, 'User reference is required'),
      name: studentNameSchema,
      gender: z.enum(['male', 'female'], {
        required_error: 'Gender is required',
      }),
      dateofBirth: z.date(),
      email: z
        .string()
        .email('Invalid email address')
        .min(1, 'Email is required'),
      permanentAdd: z.string().min(1, 'Permanent address is required'),
      presentAdd: z.string().min(1, 'Present address is required'),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
        required_error: 'Blood group is required',
      }),
      contactNo: z.string().min(1, 'Contact number is required'),
      emergencyContactNo: z
        .string()
        .min(1, 'Emergency contact number is required'),
      localGuardian: localGuardianSchema,
      guardian: guardianSchema,
      profileImg: z.string().min(1, 'Profile image is required'),
    }),
  }),
});

export const studentValidations = {
  studentValidationSchema,
};
