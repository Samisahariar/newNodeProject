import { model, Schema } from 'mongoose';
import TAcademicSemester from './studentAcademicSemester.interface';
import {
  MonthArray,
  NameOftheSemester,
  SemesterCode,
} from './studentAcademicSemester.constant';

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      enum: NameOftheSemester,
      required: true,
    },
    code: {
      type: String,
      enum: SemesterCode,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      enum: MonthArray,
    },
    endMonth: {
      type: String,
      enum: MonthArray,
    },
  },
  {
    timestamps: true,
  },
);

const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);

export default AcademicSemester;
