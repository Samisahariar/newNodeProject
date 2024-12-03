import { Students } from './students.interface';
import TStudentModel from '../students.model';
import { error } from 'console';

const createStudentIntoDb = async (studentdata: Students) => {
  /* const result = await StudentModel.create(student); */
  const StudentIns = new TStudentModel();
  if (await TStudentModel.isExistsStudent(String(studentdata.id))) {
    throw Error('the use is already exists in this database !!!');
  } else {
    const result = await TStudentModel.create(studentdata);
    return result;
  }
};

const getAlltheStudents = async () => {
  const result = await TStudentModel.find();
  return result;
};

const getSingleStudentInfo = async (id: string) => {
  const result = await TStudentModel.findOne({ id });
  return result;
};

export const studentServices = {
  createStudentIntoDb,
  getAlltheStudents,
  getSingleStudentInfo,
};
