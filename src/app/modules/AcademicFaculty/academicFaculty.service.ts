import mongoose from 'mongoose';
import { TAcademicFaculty } from './academicFaculty.interface';
import AcademicFaculty from './academicFaculty.model';

const createStudentFacultyintheDb = async (payload: TAcademicFaculty) => {
  /* type TAcademicFacultyNameCodeRapper = {
    [key: string]: string;
  }; */

/*   const AcademicFacultyNameCodeRapper: TAcademicFacultyNameCodeRapper = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
  }; */

  /* if (AcademicFacultyNameCodeRapper[payload.name] !== payload.code) {
    throw new Error('Invalid Faculty Code !!');
  } */
  const result = await AcademicFaculty.create(payload);
  return result;
};


const getAlltheFaculty = async (querys: Record<string, string>) => {
  const filters: Record<string, string> = { ...querys };

  const query: Record<string, { $regex: string; $options: string }> = {};
  Object.keys(filters).forEach((key: string) => {
    query[key] = { $regex: filters[key], $options: 'i' };
  });

  const result = await AcademicFaculty.find(query);
  return result;
};

const getTheSingleFaculty = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);
  const theSingleAcademicFaculty = await AcademicFaculty.findOne(objectId);
  return theSingleAcademicFaculty;
};





const updateASingleFaculty = async (id: string, toUpdate: object) => {
  const objectId = new mongoose.Types.ObjectId(id);
  const result = await AcademicFaculty.updateOne(
    { _id: objectId },
    { ...toUpdate, updated_at: new Date() },
  );
  if (result.modifiedCount === 1) {
    const result2 = await AcademicFaculty.aggregate([{ $match: { _id: objectId } }]);
    return result2;
  }
};





export const AcademicFacultyServices = {
  createStudentFacultyintheDb,
  getAlltheFaculty,
  getTheSingleFaculty,
  updateASingleFaculty
};
