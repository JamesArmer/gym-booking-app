export interface IUserDetails {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
  phoneNumber: string;
}

export interface IGymClassType {
  _id: string;
  name: string;
  category: string;
  description: string;
  duration: number;
  maxCapacity: number;
}

export interface IGymClass {
  _id: string;
  gymClassType: IGymClassType;
  datetime: Date;
  currentCapacity: number;
  instructor?: string;
}
