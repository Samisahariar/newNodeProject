import TAcademicSemester from "./studentAcademicSemester.interface"
import AcademicSemester from "./studentAcademicSemester.models"

const createStudentSemesterintheDb = async( payload : TAcademicSemester) =>{

    const result = await AcademicSemester.create(payload);
    
    return result

}

export const AcademicSemesterServices = {
    createStudentSemesterintheDb
}