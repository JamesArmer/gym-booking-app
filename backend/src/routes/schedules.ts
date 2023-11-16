import express, {NextFunction, Request, Response} from 'express';

const ScheduleModel = require('../models/schedule');
var router = express.Router();

/* POST new schedule */
router.post(
  '/create',
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      let request = req.body;
      let newSchedule = new ScheduleModel(request);
      await newSchedule.save();
      res.json({scheduleId: newSchedule._id});
    } catch (error: any) {
      console.error(error);
      res.status(400).json({error: error.message});
    }
  },
);

module.exports = router;
