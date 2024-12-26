import TAcademicSemester from '../studentAcademicSemester/studentAcademicSemester.interface';
import UserModel from './user.models';

const findlastStudentId = async () => {
  const lastStudentId =  await UserModel.findOne(
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

  return lastStudentId?.id ? lastStudentId.id.substring(6) : undefined;

};

export const generatedStudentId = async (payload: TAcademicSemester) => {

   const currentId =  (await findlastStudentId()) ||  (0).toString();

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `${payload.year}${payload.code}${incrementId}`;

  return incrementId; 
};

export default generatedStudentId;
