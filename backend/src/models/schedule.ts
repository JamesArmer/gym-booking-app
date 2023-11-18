import {Document, Schema, model} from 'mongoose';

export interface ISchedule extends Document {
  monday: {
    enabled: boolean;
    classTimes: string[];
  };
  tuesday: {
    enabled: boolean;
    classTimes: string[];
  };
  wednesday: {
    enabled: boolean;
    classTimes: string[];
  };
  thursday: {
    enabled: boolean;
    classTimes: string[];
  };
  friday: {
    enabled: boolean;
    classTimes: string[];
  };
  saturday: {
    enabled: boolean;
    classTimes: string[];
  };
  sunday: {
    enabled: boolean;
    classTimes: string[];
  };
}

const scheduleSchema = new Schema<ISchedule>(
  {
    monday: {type: {enabled: Boolean, classTimes: [String]}},
    tuesday: {type: {enabled: Boolean, classTimes: [String]}},
    wednesday: {type: {enabled: Boolean, classTimes: [String]}},
    thursday: {type: {enabled: Boolean, classTimes: [String]}},
    friday: {type: {enabled: Boolean, classTimes: [String]}},
    saturday: {type: {enabled: Boolean, classTimes: [String]}},
    sunday: {type: {enabled: Boolean, classTimes: [String]}},
  },
  {timestamps: true},
);

export const ScheduleModel = model<ISchedule>('Schedule', scheduleSchema);
