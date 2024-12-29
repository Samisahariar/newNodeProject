import TAcademicSemester from '../studentAcademicSemester/studentAcademicSemester.interface';
import UserModel from './user.models';

const findlastStudentId = async () => {
  const lastStudentId = await UserModel.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastStudentId?.id ? lastStudentId.id : undefined;
};



export const generatedStudentId = async (payload: TAcademicSemester) => {

  let currentId = (0).toString();
  const lastStudentId = await findlastStudentId();
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6);
  const lastStudentYearCode = lastStudentId?.substring(0, 4);
  const currentStudentSemesterCode = payload.code;
  const currentStudentYearCode = payload.year;
  if (
    lastStudentId &&
    lastStudentYearCode === currentStudentYearCode &&
    lastStudentSemesterCode === currentStudentSemesterCode
  ) {
    currentId = lastStudentId.substring(6)
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `${payload.year}${payload.code}${incrementId}`;

  return incrementId;
};

export default generatedStudentId;
