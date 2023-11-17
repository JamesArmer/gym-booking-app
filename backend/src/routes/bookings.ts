import express, {NextFunction, Request, Response} from 'express';

const bookingsModel = require('../models/booking');
var router = express.Router();

/* GET all bookings by userId  */
router.get(
  '/:userId',
  async function (req: Request, res: Response, next: NextFunction) {
    try {
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
      let newBooking = new bookingsModel(request);
      await newBooking.save();
      res.json({classId: newBooking._id});
    } catch (error: any) {
      console.error(error);
      res.status(400).json({error: error.message});
    }
  },
);

module.exports = router;
