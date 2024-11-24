import { Request, Response } from 'express';
import { studentServices } from './students.services';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    const result = await studentServices.createStudentIntoDb(student);
    res.status(200).json({
      success: true,
      message: 'the data is succesfully received !!',
      data: result,
    });
  } catch (err: any) {
    res.status(401).json({
      success: false,
      message: err.message || 'something worng ins this secviton',
      error: err,
    });
  }
};

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
  createStudent,
  getAllStudentCon,
  getSingleStudentInfo,
};
