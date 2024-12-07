import { model, Schema } from 'mongoose';
import TAcademicSemester, { TMonths } from './studentAcademicSemester.interface';

const monthArray = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      enum: ['Autumn', 'Summmer', 'Fall'],
      required: true,
    },
    code: {
      type: String,
      enum: ['01', '02', '03'],
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      enum: monthArray,
    },
    endMonth: {
      type: String,
      enum: monthArray,
    },
  },
  {
    timestamps: true,
  },
);

const academicSemester = model<TAcademicSemester>("AcademicSemester", academicSemesterSchema)

export default academicSemester
