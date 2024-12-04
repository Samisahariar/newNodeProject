import TStudentModel from "./students.model";
import { error } from 'console';



const getAlltheStudents = async () => {
  const result = await TStudentModel.find();
  return result;
};

const getSingleStudentInfo = async (id: string) => {
  const result = await TStudentModel.findOne({ id });
  return result;
};

export const studentServices = {
  getAlltheStudents,
  getSingleStudentInfo,
};
