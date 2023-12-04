import {Document, Schema, model} from 'mongoose';

export interface IGymClassType extends Document {
  name: string;
  category: string;
  description: string;
  datetime: Date;
  duration: number;
  maxCapacity: number;
}

export const gymClassTypeSchema = new Schema<IGymClassType>(
  {
    name: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    maxCapacity: {type: Number, required: true},
  },
  {timestamps: true},
);

export const GymClassTypeModel = model<IGymClassType>(
  'ClassType',
  gymClassTypeSchema,
);
