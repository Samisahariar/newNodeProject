import mongoose from 'mongoose';
import TAcademicSemester from './studentAcademicSemester.interface';
import AcademicSemester from './studentAcademicSemester.models';

const createStudentSemesterintheDb = async (payload: TAcademicSemester) => {
  type TAcademicSemesterNameCodeRapper = {
    [key: string]: string;
  };

  const AcademicSemesterNameCodeRapper: TAcademicSemesterNameCodeRapper = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
  };

  if (AcademicSemesterNameCodeRapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code !!');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};






const getAlltheSemester = async (querys: Record<string, string>) => {
  const filters: Record<string, string> = { ...querys };

  const query: Record<string, { $regex: string; $options: string }> = {};
  Object.keys(filters).forEach((key: string) => {
    query[key] = { $regex: filters[key], $options: 'i' };
  });

  const result = await AcademicSemester.find(query);
  return result;
};




const getTheSingleSemester = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);
  const theSingleAcademicSemester = await AcademicSemester.findOne(objectId);
  return theSingleAcademicSemester;
};





const updateASingleSemester = async (id: string, toUpdate: object) => {
  const objectId = new mongoose.Types.ObjectId(id);
  const result = await AcademicSemester.updateOne(
    { _id: objectId },
    { ...toUpdate, updated_at: new Date() },
  );
  if (result.modifiedCount === 1) {
    const result2 = await AcademicSemester.aggregate([{ $match: { _id: objectId } }]);
    return result2;
  }
};





export const AcademicSemesterServices = {
  createStudentSemesterintheDb,
  getAlltheSemester,
  getTheSingleSemester,
  updateASingleSemester
};
