import express, {NextFunction, Request, Response} from 'express';
import {BookingModel} from '../models/booking';
import {GymClassModel} from '../models/gymClass';
import {UserModel} from '../models/user';

var router = express.Router();

/* GET all bookings by userId  */
router.get(
  '/:userId',
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      let allUserBookings = BookingModel.find({
        user: {
          $eq: req.params.userId,
        },
      });
      if (!allUserBookings) {
        res.json({
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
      let user = UserModel.findById(req.body.userId);
      let gymClass = GymClassModel.findById(req.body.gymClassId);
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
