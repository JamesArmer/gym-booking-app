import {Document, Schema, model} from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
  phoneNumber: string;
}

export const userSchema = new Schema<IUser>(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    dateOfBirth: {type: Date, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: String, required: true},
  },
  {timestamps: true},
);

export const UserModel = model<IUser>('User', userSchema);
