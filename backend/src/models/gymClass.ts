import {Document, Schema, model} from 'mongoose';

export interface IGymClass extends Document {
  name: string;
  category: string;
  description: string;
  datetime: Date;
  duration: number;
  maxCapacity: number;
  currentCapacity: number;
  instructor?: string;
}

const gymClassSchema = new Schema<IGymClass>(
  {
    name: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    datetime: {type: Date, required: true},
    duration: {type: Number, required: true},
    maxCapacity: {type: Number, required: true},
    currentCapacity: {type: Number, required: true},
    instructor: {type: String},
  },
  {timestamps: true},
);

module.exports = model<IGymClass>('GymClass', gymClassSchema);
