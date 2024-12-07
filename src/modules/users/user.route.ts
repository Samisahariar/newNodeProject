import express, { NextFunction, Request, Response } from "express"
import { UserController } from "./user.controller";
import { Router } from "express";
import { AnyZodObject } from "zod";
import { studentValidations } from "../students/student.validationZod";

const router = Router();

const catchValidation = (schema : AnyZodObject) =>{
    return async (req : Request, res : Response, next : NextFunction) =>{
        try{
            await schema.parseAsync({
                body : req.body
            })
            next()
        }catch(error) {
            next(error)
        }
    }
}

router.post("/create-student",catchValidation(studentValidations.studentValidationSchema), UserController.createUser)

export const UserRoute = router
