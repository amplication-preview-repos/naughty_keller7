import { Appointment } from "../appointment/Appointment";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  email: string | null;
  address: string | null;
  dateOfBirth: Date | null;
  lastName: string | null;
  phoneNumber: string | null;
  appointments?: Array<Appointment>;
};
