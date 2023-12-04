import {Document, Schema, model} from 'mongoose';

export interface IClass {
  classTypeId: string;
  time: string;
}

const classesSchema = new Schema<IClass>({
  classTypeId: {type: String, required: true},
  time: {type: String, required: true},
});

export interface ISchedule extends Document {
  sunday: {
    isEnabled: boolean;
    classes: IClass[];
  };
  monday: {
    isEnabled: boolean;
    classes: IClass[];
  };
  tuesday: {
    isEnabled: boolean;
    classes: IClass[];
  };
  wednesday: {
    isEnabled: boolean;
    classes: IClass[];
  };
  thursday: {
    isEnabled: boolean;
    classes: IClass[];
  };
  friday: {
    isEnabled: boolean;
    classes: IClass[];
  };
  saturday: {
    isEnabled: boolean;
    classes: IClass[];
  };
}

const scheduleSchema = new Schema<ISchedule>(
  {
    sunday: {
      type: {isEnabled: Boolean, classes: [classesSchema]},
      required: true,
    },
    monday: {
      type: {isEnabled: Boolean, classes: [classesSchema]},
      required: true,
    },
    tuesday: {
      type: {isEnabled: Boolean, classes: [classesSchema]},
      required: true,
    },
    wednesday: {
      type: {isEnabled: Boolean, classes: [classesSchema]},
      required: true,
    },
    thursday: {
      type: {isEnabled: Boolean, classes: [classesSchema]},
      required: true,
    },
    friday: {
      type: {isEnabled: Boolean, classes: [classesSchema]},
      required: true,
    },
    saturday: {
      type: {isEnabled: Boolean, classes: [classesSchema]},
      required: true,
    },
  },
  {timestamps: true},
);

export const ScheduleModel = model<ISchedule>('Schedule', scheduleSchema);
