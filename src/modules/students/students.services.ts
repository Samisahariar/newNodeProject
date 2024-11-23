import { Students } from './students.interface';
import StudentModel from '../students.model';

const createStudentIntoDb = async (student: Students) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAlltheStudents = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentInfo = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const studentServices = {
  createStudentIntoDb,
  getAlltheStudents,
  getSingleStudentInfo,
};
