import { Model, Schema, model } from 'mongoose';
import {
  Students,
  LocalGuardian,
  Guardian,
  StudentName,
  StudentModel,
} from './students/students.interface';
import validator from 'validator';
import { StudentModel } from './students/students.interface';

const studentNameSchema = new Schema<StudentName>({
  firstName: {
    trim: true,
    type: String,
    required: [true, 'First name is required'],
    validate: {
      validator: function (value) {
        const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        return value === capitalizedValue;
      },
      message:
        '{VALUE} is not appropiate cause this is not supporting format !!!',
    },
  },
  middleName: {
    type: String,
    required: [true, 'Middle name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is no valid !!',
    },
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  localGuardianName: {
    type: String,
    required: [true, 'Local guardian name is required'],
  },
  localGuardianNo: {
    type: String,
    required: true,
  },
  localGuardianAdd: {
    type: String,
    required: [true, 'Local guardian address is required'],
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required"],
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is required"],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
  },
  motherContactNO: {
    type: String,
    required: [true, "Mother's contact number is required"],
  },
});

const studentSchema = new Schema<Students, StudentModel>({
  id: {
    type: String,
    required: [true, 'Student ID is required'],
  },
  name: {
    type: studentNameSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: [true, 'Gender is required'],
  },
  dateofBirth: {
    type: String,
    required: [true, 'Date of birth is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not a perfect email !!',
    },
  },
  permanentAdd: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  presentAdd: {
    type: String,
    required: [true, 'Present address is required'],
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: [true, 'Blood group is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian information is required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required'],
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    required: [true, 'Status is required'],
  },
  profileImg: {
    type: String,
    required: true,
  },
});

//instance method are used here forr all the time
/* studentSchema.methods.isStudentExists = async function (id : string){
    const result = await TStudentModel.findOne({id})
    return result
} */
studentSchema.statics.isExistsStudent = async (id: string) => {
  const result = await TStudentModel.findOne({ id });
  return result;
};

const TStudentModel = model<Students, StudentModel>('student', studentSchema);
export default TStudentModel;