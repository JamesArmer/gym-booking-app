import {Schema, model} from 'mongoose';

export interface IClass {
  name: string;
  category: string;
  description: string;
  duration: number;
}

const classSchema = new Schema<IClass>(
  {
    name: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
  },
  {timestamps: true},
);

module.exports = model<IClass>('Class', classSchema);
