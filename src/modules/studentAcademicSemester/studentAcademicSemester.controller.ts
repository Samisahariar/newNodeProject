import { RequestHandler } from 'express';
import sendResponse from '../../app/utils/serverResponse';
import catchValidation from '../../app/middlewares/validationResponse';
import { AcademicSemesterServices } from './studentAcademicSemester.services';

const createAcademicSemester: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicSemesterServices.createStudentSemesterintheDb(
      req.body,
    );
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

export const AcademicSemesterControllers = {
  createAcademicSemester,
};
