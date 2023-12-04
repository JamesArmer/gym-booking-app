import express, {NextFunction, Request, Response} from 'express';
import {IClass, ISchedule, ScheduleModel} from '../models/schedule';
import {GymClassModel} from '../models/gymClass';
import {getNextDayOfWeekFromDate} from '../utility/functions';
import {GymClassTypeModel} from '../models/gymClassType';

var router = express.Router();

/* POST new schedule */
router.post(
  '/create',
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      let request = req.body;
      let newSchedule = new ScheduleModel(request);
      await newSchedule.save();
      createWeeklyGymClasses(newSchedule.toObject());
      res.json({scheduleId: newSchedule._id});
    } catch (error: any) {
      console.error(error);
      res.status(400).json({error: error.message});
    }
  },
);

const createWeeklyGymClasses = (newSchedule: ISchedule) => {
  let counter = 0;
  for (let day in newSchedule) {
    if (newSchedule[day as keyof ISchedule].isEnabled) {
      const classes = newSchedule[day as keyof ISchedule].classes.forEach(
        async (clazz: IClass) => {
          let nextDayOfWeekOccurence = getNextDayOfWeekFromDate(
            new Date(),
            counter,
          );
          nextDayOfWeekOccurence.setHours(Number(clazz.time.slice(0, 2)));
          nextDayOfWeekOccurence.setMinutes(Number(clazz.time.slice(2, 4)));
          const newClassType = await GymClassTypeModel.findById(
            clazz.classTypeId,
          ).lean();
          let newClass = new GymClassModel({
            gymClassType: newClassType,
            datetime: nextDayOfWeekOccurence,
            currentCapacity: 0,
          });
          newClass.save();
        },
      );
    }
    counter++;
  }
};

export default router;
