import {Document, Schema} from 'mongoose';
import {IUser} from './user';
import {IGymClass} from './gymClass';

interface IBooking extends Document {
  user: IUser['_id'];
  gymClass: IGymClass['_id'];
  bookingTime: Date;
}

const bookingSchema = new Schema<IBooking>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  gymClass: {
    type: Schema.Types.ObjectId,
    ref: 'GymClass',
    required: true,
  },
  bookingTime: {
    type: Date,
    default: Date.now,
  },
});
