import { userServices } from './user.services';
import StudentsInterface from '../students/students.interface';
import { Request, Response } from 'express';

const createUser = async (req: Request, res: Response) => {
  try {
    const { passowrd, student } = req.body;

    const result = await userServices.createStudentIntoDb(passowrd, student);

    res.status(200).json({
        success : true,
        message : "user created Successfully",
        data : result
    })
  } catch (err: any) {
    res.status(401).json({
      success: false,
      message: err.message || 'something worng ins this secviton',
      error: err,
    });
  }
};

export const UserController = {
  createUser,
};
