import express, {NextFunction, Request, Response} from 'express';

const gymClassesModel = require('../models/gymClass');
var router = express.Router();

/* GET gym classes */
router.get(
  '/daily',
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      const today = new Date();
      console.log(today);
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

      let gymClasses = await gymClassesModel.find({
        datetime: {
          $gte: today,
          $lt: tomorrow,
        },
      });

      let sectionTitle = today.toDateString();

      res.json({title: sectionTitle, gymClasses: gymClasses});
    } catch (error: any) {
      console.error(error);
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
      let newClass = new gymClassesModel(request);
      await newClass.save();
      res.json({gymClassId: newClass._id});
    } catch (error: any) {
      console.error(error);
      res.status(400).json({error: error.message});
    }
  },
);

module.exports = router;
