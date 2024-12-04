import { Request, Response } from 'express';
import { studentServices } from './students.services';



const getAllStudentCon = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAlltheStudents();
    res.status(200).json({
      succes: true,
      message: 'The data are successfully rethrived !!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudentInfo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await studentServices.getSingleStudentInfo(id);
    res.status(200).json({
      success: true,
      message: 'the singledata is succesfully rethrived !!',
      data: result,
    });
  } catch (error) {}
};

export const studentController = {

  getAllStudentCon,
  getSingleStudentInfo,
};
