import {Schema, model} from 'mongoose';

interface IUser {
  userId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
  phoneNumber: string;
}

const userSchema = new Schema<IUser>(
  {
    userId: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    dateOfBirth: {type: Date, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: String, required: true},
  },
  {timestamps: true},
);

module.exports = model<IUser>('User', userSchema);
