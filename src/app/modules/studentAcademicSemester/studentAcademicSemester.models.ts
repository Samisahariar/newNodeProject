import { model, Schema } from 'mongoose';
import TAcademicSemester from './studentAcademicSemester.interface';
import {
  MonthArray,
  NameOftheSemester,
  SemesterCode,
} from './studentAcademicSemester.constant';
import { NextFunction } from 'express';

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

academicSemesterSchema.pre('save', async function (next) {
  const issemesterExists = await AcademicSemester.findOne({
    name: this.name,
    year: this.year,
  });
  if (issemesterExists) {
    throw new Error('the semester is already exists in the database !');
  }
  next();
});

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);

export default AcademicSemester;
