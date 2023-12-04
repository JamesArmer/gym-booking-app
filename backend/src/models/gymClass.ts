import {Document, Schema, model} from 'mongoose';
import {IGymClassType, gymClassTypeSchema} from './gymClassType';

export interface IGymClass extends Document {
  gymClassType: IGymClassType;
  datetime: Date;
  currentCapacity: number;
  instructor?: string;
}

export const gymClassSchema = new Schema<IGymClass>(
  {
    gymClassType: {
      type: gymClassTypeSchema,
      required: true,
    },
    datetime: {type: Date, required: true},
    currentCapacity: {type: Number, required: true},
    instructor: {type: String},
  },
  {timestamps: true},
);

export const GymClassModel = model<IGymClass>('GymClass', gymClassSchema);
