/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextFunction, Request, Response } from 'express';
import express from 'express';

const globalErrorHandlers = (
  err: any,
  res: Response,
) : Record<string, any> => {
  const statusCode = 500;
  const message = err.message || 'Something went Wrong !!';

  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrorHandlers;
