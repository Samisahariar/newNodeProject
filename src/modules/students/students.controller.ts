import { Request, RequestHandler, Response } from 'express';
import { studentServices } from './students.services';
import sendResponse from '../../app/utils/serverResponse';
import { NextFunction } from 'express-serve-static-core';

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
  };
};

const getAllStudentCon = catchAsync(async (req, res, next) => {
  const result = await studentServices.getAlltheStudents();
  sendResponse(res, {
    success: true,
    message: 'data is received successfully !',
    data: result,
    status: 200,
  });
});

const getSingleStudentInfo = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await studentServices.getSingleStudentInfo(id);
  res.status(200).json({
    success: true,
    message: 'the singledata is succesfully rethrived !!',
    data: result,
  });
});

export const studentController = {
  getAllStudentCon,
  getSingleStudentInfo,
};
