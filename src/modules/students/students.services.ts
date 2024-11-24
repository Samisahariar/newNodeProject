import { Students } from './students.interface';
import TStudentModel from '../students.model';
import { error } from 'console';

const createStudentIntoDb = async (studentdata: Students) => {
  /* const result = await StudentModel.create(student); */


    if(await TStudentModel.isExistsStudent(studentdata.id)){
        throw Error("the use is already exists in this database !!!")
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
