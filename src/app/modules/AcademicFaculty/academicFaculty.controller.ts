import { RequestHandler } from 'express';
import sendResponse from '../../utils/serverResponse';
import { AcademicFacultyServices } from './academicFaculty.service';


const createAcademicFaculty: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicFacultyServices.createStudentFacultyintheDb(
      req.body,
    );
    sendResponse(res, {
      success: true,
      status: 200,
      message: 'data is received succesfully !',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

const getTheSingleFacultyController: RequestHandler = async (
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

const getAllTheFaculty: RequestHandler = async (req, res, next) => {
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



const updateTheSingleFaculty: RequestHandler = async (req, res, next) => {
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


export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getTheSingleFacultyController,
  getAllTheFaculty,
  updateTheSingleFaculty
};
