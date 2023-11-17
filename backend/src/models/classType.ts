import {Document, Schema, model} from 'mongoose';

export interface IClassType extends Document {
  name: string;
  category: string;
  description: string;
  datetime: Date;
  duration: number;
  maxCapacity: number;
}

const classTypeSchema = new Schema<IClassType>(
  {
    name: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    maxCapacity: {type: Number, required: true},
  },
  {timestamps: true},
);

module.exports = model<IClassType>('ClassType', classTypeSchema);
