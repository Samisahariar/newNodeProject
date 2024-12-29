import { RequestHandler } from 'express';
import sendResponse from '../../utils/serverResponse';
import { AcademicFacultyServices } from './academicFaculty.service';


const createAcademicSemester: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicFacultyServices.createStudentSemesterintheDb(
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

const getTheSingleSemesterController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await AcademicFacultyServices.getTheSingleFaculty(
      id as string,
    );
    sendResponse(res, {
      success: true,
      status: 200,
      message:
        'data is successfully stored in here and we are all set to do the same thing for this moment !',
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const getAllTheSemester: RequestHandler = async (req, res, next) => {
  try {
    const query: Record<string, string> = {};
    Object.keys(req.query).forEach((key) => {
      const value = req.query[key];
      if (typeof value === 'string') {
        query[key] = value;
      }
    });
    const result = await AcademicFacultyServices.getAlltheFaculty(query);
    sendResponse(res, {
      success: true,
      status: 200,
      message: 'data is recevies successfully !!',
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};



const updateTheSingleSemester: RequestHandler = async (req, res, next) => {
  try {
    const toUpdate = req.body;
    const { id } = req.params;

    const result = await AcademicFacultyServices.updateASingleFaculty(
      id,
      toUpdate,
    );
    sendResponse(res, {
      success: true,
      status: 200,
      message: 'Data is received succesfully !',
      data: result,
    });
  } catch (error) {
    next(error)
  }
};


export const AcademicFacultyServicesdemicSemesterControllers = {
  createAcademicSemester,
  getTheSingleSemesterController,
  getAllTheSemester,
  updateTheSingleSemester
};
