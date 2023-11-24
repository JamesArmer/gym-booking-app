import {Document, Schema, model} from 'mongoose';

export interface ISchedule extends Document {
  sunday: {
    isEnabled: boolean;
    classTimes: string[];
  };
  monday: {
    isEnabled: boolean;
    classTimes: string[];
  };
  tuesday: {
    isEnabled: boolean;
    classTimes: string[];
  };
  wednesday: {
    isEnabled: boolean;
    classTimes: string[];
  };
  thursday: {
    isEnabled: boolean;
    classTimes: string[];
  };
  friday: {
    isEnabled: boolean;
    classTimes: string[];
  };
  saturday: {
    isEnabled: boolean;
    classTimes: string[];
  };
}

const scheduleSchema = new Schema<ISchedule>(
  {
    sunday: {type: {isEnabled: Boolean, classTimes: [String]}, required: true},
    monday: {type: {isEnabled: Boolean, classTimes: [String]}, required: true},
    tuesday: {type: {isEnabled: Boolean, classTimes: [String]}, required: true},
    wednesday: {
      type: {isEnabled: Boolean, classTimes: [String]},
      required: true,
    },
    thursday: {
      type: {isEnabled: Boolean, classTimes: [String]},
      required: true,
    },
    friday: {type: {isEnabled: Boolean, classTimes: [String]}, required: true},
    saturday: {
      type: {isEnabled: Boolean, classTimes: [String]},
      required: true,
    },
  },
  {timestamps: true},
);

export const ScheduleModel = model<ISchedule>('Schedule', scheduleSchema);
