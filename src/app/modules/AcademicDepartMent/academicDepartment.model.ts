import mongoose, { model, Schema } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';


const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
    },
    academicFaculty : {
        type : Schema.Types.ObjectId,
        ref : "AcademicFaculty"
    }
  },
  {
    timestamps: true,
  }
);

const AcademicDepartment = model<TAcademicDepartment>('AcademicFaculty', academicDepartmentSchema);

export default AcademicDepartment;
