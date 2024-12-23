import config from '../../config';
import StudentsInterface from '../students/students.interface';
import UserModel from './user.models';
import userModel from './user.models';
import TUser from './users.interface';
import { StudentModel } from '../students/students.interface';
import TStudentModel from '../students/students.model';
import TAcademicSemester from '../studentAcademicSemester/studentAcademicSemester.interface';
import AcademicSemester from '../studentAcademicSemester/studentAcademicSemester.models';
import { generateStudentId } from '../../utils/generateStudentId';

const createStudentIntoDb = async (
  password: string,
  studentdata: StudentsInterface,
) => {
  /* const result = await StudentModel.create(student); */

  /* if (await TStudentModel.isExistsStudent(String(studentdata.id))) {
    throw Error('the use is already exists in this database !!!');
  } else { */

  let newUser: Partial<TUser> = {};
  newUser.password = password || (config.default_password as string);
  const studentSemesterData = await AcademicSemester.findById(studentdata.academicSemester)
  const userData = await UserModel.create(newUser);
  userData.id = generateStudentId(studentSemesterData as TAcademicSemester)
  if (Object.keys(userData).length) {
    studentdata.id = userData.id;
    studentdata.user = userData._id;
    const result = await TStudentModel.create(studentdata);
    return result;
  };
};




export const userServices = {
  createStudentIntoDb,
};
