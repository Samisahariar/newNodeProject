import { NextFunction, Request, Response } from "express";

const globalErrorHandlers = (err : any, req: Request, res : Response, next : NextFunction) =>{
    const statusCode = 500;
    const message = err.message || "Something went Wrong !!";

    return res.status(statusCode).json({
        success : false,
        message,
        error : err
    })

}

export default globalErrorHandlers