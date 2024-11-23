import { Schema, model, connect } from 'mongoose';

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

export type UserName = {
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

export type Students = {
  id: string;
  name: UserName;
  dateofBirth: string;
  email: string;
  gender: 'male' | 'female';
  permanentAdd: string;
  presentAdd: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  contactNo: string;
  emergencyContactNo: string;
  localGuardian: LocalGuardian;
  guardian: Guardian;
  status: 'active' | 'inactive';
  profileImg?: string;
};
