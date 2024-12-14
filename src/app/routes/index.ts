import { Router } from 'express';
import { StudentRouters } from '../modules/students/students.routers';
import { UserRoute } from '../modules/users/user.route';
import app from '../../app';
import { AcademicSemesterRouter } from '../modules/studentAcademicSemester/studentAcademicSemester.router';

const router = Router();

const allthemoduleRoutes = [
  {
    path: '/student',
    route: StudentRouters,
  },
  {
    path: '/user',
    route: UserRoute,
  },
  {
    path: '/academicSemester',
    route: AcademicSemesterRouter,
  },
];

allthemoduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
