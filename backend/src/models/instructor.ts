import {Document, Schema, model} from 'mongoose';

export interface IInstructor extends Document {
  name: string;
  description: string;
  specialties: string;
}

const instructorSchema = new Schema<IInstructor>(
  {
    name: {type: String, required: true},
    description: {type: String, required: true},
    specialties: {type: String, required: true},
  },
  {timestamps: true},
);

export const InstructorModel = model<IInstructor>(
  'Instructor',
  instructorSchema,
);
