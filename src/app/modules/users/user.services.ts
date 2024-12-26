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

const createStudentIntoDb = async (
  password: string,
  payload: StudentsInterface,
) => {
  /* const result = await StudentModel.create(student); */

  /* if (await TStudentModel.isExistsStudent(String(studentdata.id))) {
    throw Error('the use is already exists in this database !!!');
  } else { */
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'student';

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.academicSemester,
  );

  //set  generated id
  userData.id = await generatedStudentId(admissionSemester as TAcademicSemester);

  // create a user
  const newUser = await UserModel.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    // set id , _id as user
    payload.id = newUser.id;
    payload.user = newUser._id; //reference _id

    const newStudent = await TStudentModel.create(payload);
    return newStudent;
  }
};

export const userServices = {
  createStudentIntoDb,
};
