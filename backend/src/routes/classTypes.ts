import express, {NextFunction, Request, Response} from 'express';
import {GymClassTypeModel} from '../models/gymClassType';

var router = express.Router();

router.get(
  '/id/:classTypeId',
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      let gymClass = await GymClassTypeModel.findById(
        req.params.classTypeId,
      ).lean();
      if (!gymClass) {
        res.status(404).json({
          error: `Record with classTypeId ${req.params.userId} not found`,
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

router.post(
  '/create',
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      let request = req.body;
      let newClassType = new GymClassTypeModel(request);
      await newClassType.save();
      res.json({classTypeId: newClassType._id});
    } catch (error: any) {
      console.error(error);
      res.status(400).json({error: error.message});
    }
  },
);

export default router;
