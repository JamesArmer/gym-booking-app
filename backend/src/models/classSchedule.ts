import {Schema, model} from 'mongoose';

interface ICondensedClass {
  name: string;
  datetime: Date;
  duration: number;
  isReserved: boolean;
}

export interface IClassSchedule {
  date: Date;
  class: ICondensedClass[];
}

const classScheduleSchema = new Schema<IClassSchedule>({
  date: {type: Date, required: true},
  class: [
    {
      name: {type: String, required: true},
      time: {type: Date, required: true},
      duration: {type: Number, required: true},
      isReserved: {type: Boolean, required: true},
    },
  ],
});

module.exports = model<IClassSchedule>('classSchedule', classScheduleSchema);
