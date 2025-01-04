import mongoose from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';
import AcademicDepartment from './academicDepartment.model';

const createDepartmentIntoDB = async (payload: TAcademicDepartment) => {

  const result = await AcademicDepartment.create(payload);
  return result;
};


const getAlltheDepartment = async (querys: Record<string, string>) => {
  
  const filters: Record<string, string> = { ...querys };

  const query: Record<string, { $regex: string; $options: string }> = {};
  Object.keys(filters).forEach((key: string) => {
    query[key] = { $regex: filters[key], $options: 'i' };
  });
  const result = await AcademicDepartment.find(query).populate("academicFaculty");
  return result;

};


const getTheSingleDepartment = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);
  const theSingleAcademicFaculty = await AcademicDepartment.findOne(objectId) ;
  return theSingleAcademicFaculty;
};

const updateASingleDepartment = async (id: string, toUpdate: object) => {
  const objectId = new mongoose.Types.ObjectId(id);
  const result = await AcademicDepartment.updateOne(
    { _id: objectId },
    { ...toUpdate, updated_at: new Date() },
  );
  if (result.modifiedCount === 1) {
    const result2 = await AcademicDepartment.aggregate([
      { $match: { _id: objectId } },
    ]);
    return result2;
  }
};

export const AcademicDepartmentServices = {
  createDepartmentIntoDB,
  getTheSingleDepartment,
  getAlltheDepartment,
  updateASingleDepartment,
};
