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
import { threadId } from 'worker_threads';

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
    }

    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;


    const newStudent = await TStudentModel.create([payload], { session });

    if (!newStudent.length) {
      throw new AppError(401, 'Failed to create new Student !');
    }


    await session.commitTransaction();
    await session.endSession()


    return newStudent;
  } catch (error) {
    
    await session.abortTransaction()
    await session.endSession()

    throw new Error ("Failed to create student !! ")
  }

  //if password is not given , use deafult password

  //set student role

  //set  generated id

  // create a user

  //create a student
};

export const userServices = {
  createStudentIntoDb,
};
