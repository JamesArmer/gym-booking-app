import express, {NextFunction, Request, Response} from 'express';
import {BookingModel} from '../models/booking';
import {GymClassModel} from '../models/gymClass';
import {UserModel} from '../models/user';

var router = express.Router();

/* GET all bookings by userId  */
router.get(
  '/all/:userId',
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.params.userId);
      let allUserBookings = await BookingModel.find({
        user: {
          // _id: req.params.userId,
          firstName: 'James',
        },
      });
      if (allUserBookings.length == 0) {
        res.status(404).json({
          error: `No bookings associated with userId ${req.params.userId}`,
        });
      } else {
        res.send(allUserBookings);
      }
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
      let user = await UserModel.findById(req.body.userId).lean();
      let gymClass = await GymClassModel.findById(req.body.gymClassId).lean();
      let newBooking = new BookingModel({
        user: user,
        gymClass: gymClass,
      });
      await newBooking.save();
      res.json({bookingId: newBooking._id});
    } catch (error: any) {
      console.error(error.message);
      res.status(400).json({error: error.message});
    }
  },
);

module.exports = router;
