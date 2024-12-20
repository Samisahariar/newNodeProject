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


const getTheSingleSemester = async (id: string) => {
  console.log(
    `this is the get id of the academic semester and the id is ${id}`,
  );

  /*  const theSingleAcademicSemester = await AcademicSemester.findOne(ob) */

};

export const AcademicSemesterServices = {
  createStudentSemesterintheDb,
  getTheSingleSemester,
};
