import { Request, Response } from 'express';

type dataType<T> = {
  success: boolean;
  status: number;
  message: string;
  data: T;
};

const sendResponse = <T>(res: Response, data: dataType<T>) => {
  res.status(data?.status).json({
    success: data.success,
    status : data.status,
    message: data.message,
    data: data.data,
  });
};

export default sendResponse;
