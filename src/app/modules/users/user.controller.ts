import { userServices } from './user.services';
import StudentsInterface from '../students/students.interface';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import sendResponse from '../../utils/serverResponse';

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { password, student } = req.body;
    const result = await userServices.createStudentIntoDb(password, student);

    sendResponse(res, {
      success: true,
      status: 200,
      message: 'data is received succesfully !',
      data: result,
    });
  } catch (err: any) {
    /* res.status(401).json({
      success: false,
      message: err.message || 'something worng ins this secviton',
      error: err,
    }); */
    next(err);
  }
};

export const UserController = {
  createUser,
};
