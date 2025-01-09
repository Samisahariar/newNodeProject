import config from '../../config';

import UserModel from './user.models';
import TUser from './users.interface';
import {
  StudentModel,
  StudentsInterface,
} from '../students/students.interface';
import TStudentModel from '../students/students.model';
import TAcademicSemester from '../studentAcademicSemester/studentAcademicSemester.interface';
import AcademicSemester from '../studentAcademicSemester/studentAcademicSemester.models';
import generatedStudentId from './user.utils';
import mongoose from 'mongoose';
import AppError from '../errors/AppError';

const createStudentIntoDb = async (
  password: string,
  payload: StudentsInterface,
) => {
  /* const result = await StudentModel.create(student); */

  /* if (await TStudentModel.isExistsStudent(String(studentdata.id))) {
    throw Error('the use is already exists in this database !!!');
  } else { */

  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_password as string);

  userData.role = 'student';

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.academicSemester,
  );

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    userData.id = await generatedStudentId(
      admissionSemester as TAcademicSemester,
    );

    const newUser = await UserModel.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(401, 'Failed to create user');
    };

    if (Object.keys(newUser).length) {
      // set id , _id as user

      const newStudent = await TStudentModel.create(payload);
      return newStudent;
    }


    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id


  } catch (error) {}

  //if password is not given , use deafult password

  //set student role

  //set  generated id

  // create a user

  //create a student
};

export const userServices = {
  createStudentIntoDb,
};
