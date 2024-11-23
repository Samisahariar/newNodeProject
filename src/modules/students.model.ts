import { Schema, model, connect } from 'mongoose';
import {
  Students,
  LocalGuardian,
  UserName,
  Guardian,
} from './students/students.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  localGuardianName: { type: String },
  localGuardianNo: { type: String },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  fatherOccupation: { type: String },
  motherName: { type: String, required: true },
  motherOccupation: { type: String },
  motherContactNO: { type: String, required : true }
});

const studenSchema = new Schema<Students>({
  id: { type: String, required: true },
  name: userNameSchema,
  gender: ['male', 'female'],
  dateofBirth: { type: String },
  email: { type: String, required: true },
  permanentAdd: { type: String, required: true },
  presentAdd: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String },
  localGuardian: localGuardianSchema,
  guardian: guardianSchema,
  status: ['active', 'inactive'],
  profileImg: { type: String },
});

const StudentModel = model<Students>('student', studenSchema);

export default StudentModel;
