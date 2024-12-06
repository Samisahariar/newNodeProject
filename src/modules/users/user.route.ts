import express from "express"
import { UserController } from "./user.controller";
import { Router } from "express";


const router = Router();

router.post("/create-student", UserController.createUser)


export const UserRoute = router
