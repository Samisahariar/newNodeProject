import { RequestHandler } from 'express';
import sendResponse from '../../utils/serverResponse';
import { AcademicDepartmentServices } from './academicDepartment.service';


const createAcademicDepartment: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicDepartmentServices.createDepartmentIntoDB(
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




const getTheSingleDepartmentController: RequestHandler = async (
  req,
  res,
  next,
) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await AcademicDepartmentServices.getTheSingleDepartment(
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

const getAllTheDepartment: RequestHandler = async (req, res, next) => {
  try {
    const query: Record<string, string> = {};
    Object.keys(req.query).forEach((key) => {
      const value = req.query[key];
      if (typeof value === 'string') {
        query[key] = value;
      }
    });
    const result = await AcademicDepartmentServices.getAlltheDepartment(query);
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



const updateTheSingleDepartment: RequestHandler = async (req, res, next) => {
  try {
    const toUpdate = req.body;
    const { id } = req.params;

    const result = await AcademicDepartmentServices.updateASingleDepartment(
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


export const AcademicDepartmentControllers = {
  createAcademicDepartment,
  getTheSingleDepartmentController,
  getAllTheDepartment,
  updateTheSingleDepartment
};
