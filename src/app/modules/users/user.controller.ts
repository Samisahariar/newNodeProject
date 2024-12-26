import { userServices } from './user.services';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import sendResponse from '../../utils/serverResponse';
import catchAsync from '../../utils/catchAsync';

const createUser: RequestHandler =  catchAsync( async (req, res, next) => {
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

    next(err);

  }
});

export const UserController = {
  createUser,
};
