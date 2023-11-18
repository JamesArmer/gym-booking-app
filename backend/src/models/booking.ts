import {Document, Schema, model} from 'mongoose';
import {IUser, userSchema} from './user';
import {IGymClass, gymClassSchema} from './gymClass';

interface IBooking extends Document {
  user: IUser;
  gymClass: IGymClass;
}

const bookingSchema = new Schema<IBooking>(
  {
    user: {
      type: userSchema,
      required: true,
    },
    gymClass: {
      type: gymClassSchema,
      required: true,
    },
  },
  {timestamps: true},
);

export const BookingModel = model<IBooking>('Booking', bookingSchema);
