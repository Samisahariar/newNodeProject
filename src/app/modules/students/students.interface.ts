import { Schema, model, connect, Model, Types } from 'mongoose';

export type Guardian = {
  fatherName: {
    type: string;
    required: true;
  };
  fatherContactNo: {
    type: string;
    required: true;
  };

  fatherOccupation: string;

  motherName: {
    type: string;
    required: true;
  };

  motherOccupation: string;
  motherContactNO: {
    type: string;
    required: true;
  };
};

export type LocalGuardian = {
  localGuardianName: {
    type: string;
    required: true;
  };
  localGuardianNo: {
    type: string;
    required: true;
  };
  localGuardianAdd: {
    type: string;
    required: true;
  };
};

export type StudentName = {
  firstName: {
    type: string;
    required: true;
  };
  middleName: string;
  lastName: {
    type: string;
    required: true;
  };
};

export type StudentsInterface = {
  id: { type: string };
  password: { type: string; max: 20 };
  user: Types.ObjectId;
  name: StudentName;
  dateofBirth: string;
  email: string;
  gender: 'male' | 'female';
  permanentAdd: string;
  presentAdd: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  contactNo: string;
  academicSemester : Types.ObjectId;
  academicDepartment : Types.ObjectId;
  emergencyContactNo: string;
  localGuardian: LocalGuardian;
  guardian: Guardian;
  profileImg?: string;
};
//instance method are all of these and we are work here for that reason !!
/* export type StudentMethod = {
  isStudentExists(id: string): Promise<Students | null>;
  export type StudentModel = Model<Students, {}, StudentMethod>;
}; */

//static method and the requirement in the interface;

export interface StudentModel extends Model<StudentsInterface> {
  isExistsStudent(id: string): Promise<StudentsInterface>;
}
