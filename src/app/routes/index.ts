import { Router } from 'express';
import { StudentRouters } from '../modules/students/students.routers';
import { UserRoute } from '../modules/users/user.route';
import { AcademicSemesterRouter } from '../modules/studentAcademicSemester/studentAcademicSemester.router';
import { AcademicFacultyRouter } from '../modules/AcademicFaculty/academicFaculty.router';
import { AcademicDepartmentRouter } from '../modules/AcademicDepartMent/acedemicDepartment.router';


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
  {
    path : "/academicFaculty",
    route : AcademicFacultyRouter
  },
  
  {
    path : "/academicDepartment",
    route : AcademicDepartmentRouter
  }
];

allthemoduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
