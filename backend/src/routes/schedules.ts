import express, {NextFunction, Request, Response} from 'express';
import {ISchedule, ScheduleModel} from '../models/schedule';
import {GymClassModel} from '../models/gymClass';
import {getNextDayOfWeekFromDate} from '../utility/functions';

var router = express.Router();

const createWeeklyGymClasses = (newSchedule: ISchedule) => {
  let counter = 0;
  for (let day in newSchedule) {
    if (newSchedule[day as keyof ISchedule].isEnabled) {
      newSchedule[day as keyof ISchedule].classTimes.forEach(
        (classTime: string) => {
          let nextDayOfWeekOccurence = getNextDayOfWeekFromDate(
            new Date(),
            counter,
          );
          nextDayOfWeekOccurence.setHours(Number(classTime.slice(0, 2)));
          nextDayOfWeekOccurence.setMinutes(Number(classTime.slice(2, 4)));
          let newClass = new GymClassModel({
            name: 'CrossFit WOD',
            category: 'CrossFit',
            description:
              'Constantly varied functional fitness performed at high intensity',
            datetime: nextDayOfWeekOccurence,
            duration: 60,
            maxCapacity: 12,
            currentCapacity: 0,
          });
          newClass.save();
        },
      );
    }
    counter++;
  }
};

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

module.exports = router;
