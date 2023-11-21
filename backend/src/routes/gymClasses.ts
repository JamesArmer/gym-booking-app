import express, {NextFunction, Request, Response} from 'express';
import {GymClassModel} from '../models/gymClass';

var router = express.Router();

/* GET gym class by ID */
router.get(
  '/id/:gymClassId',
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      let gymClass = await GymClassModel.findById(req.params.gymClassId).lean();
      if (!gymClass) {
        res.status(404).json({
          error: `Record with gymClassId ${req.params.userId} not found`,
        });
      } else {
        res.send(gymClass);
      }
    } catch (error: any) {
      console.error(error);
      res.status(400).json({error: error.message});
    }
  },
);

/* GET gym classes in a daily view */
router.get(
  '/daily',
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

      let gymClasses = await GymClassModel.find({
        datetime: {
          $gte: today,
          $lt: tomorrow,
        },
      })
        .sort({datetime: 1})
        .lean();

      let sectionTitle = today.toDateString();

      res.json({title: sectionTitle, gymClasses: gymClasses});
    } catch (error: any) {
      console.error(error.message);
      res.status(400).json({error: error.message});
    }
  },
);

/* POST new class */
router.post(
  '/create',
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      let request = req.body;
      let newClass = new GymClassModel(request);
      await newClass.save();
      res.json({gymClassId: newClass._id});
    } catch (error: any) {
      console.error(error);
      res.status(400).json({error: error.message});
    }
  },
);

module.exports = router;
