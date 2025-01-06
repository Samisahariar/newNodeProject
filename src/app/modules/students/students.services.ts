import TStudentModel from './students.model';

const getAlltheStudents = async () => {
  const result = await TStudentModel.find()
    .populate('academicSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const getSingleStudentInfo = async (id: string) => {
  
  const isTheStudentExists = await TStudentModel.findOne({ id });

  if(!isTheStudentExists){
    throw new Error("The StudentData is NOT Available !! ")
  }

  const result = await TStudentModel.findOne({ id });
  return result;
};

export const studentServices = {
  getAlltheStudents,
  getSingleStudentInfo,
};
