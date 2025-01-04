import { Request, RequestHandler, Response } from 'express';
import { studentServices } from './students.services';
import sendResponse from '../../utils/serverResponse';
import { NextFunction } from 'express-serve-static-core';

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
  };
};

const getAllStudentCon = catchAsync(async (req, res, next) => {
  try {
    const result = await studentServices.getAlltheStudents();
    sendResponse(res, {
      success: true,
      message: 'data is received successfully !',
      data: result,
      status: 200,
    });
  } catch (error) {
    next(error);
  }
});

const getSingleStudentInfo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const result = await studentServices.getSingleStudentInfo(id);
    res.status(200).json({
      success: true,
      message: 'the singledata is fucked up!!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const studentController = {
  getAllStudentCon,
  getSingleStudentInfo,
};
