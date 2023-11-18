export interface IUserDetails {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
  phoneNumber: string;
}

export interface IGymClass {
  _id: string;
  name: string;
  category: string;
  description: string;
  datetime: Date;
  duration: number;
  maxCapacity: number;
  currentCapacity: number;
  instructor?: string;
}
