import { Appointment } from "../appointment/Appointment";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address: string | null;
  price: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
  squareFootage: number | null;
  description: string | null;
  available: boolean | null;
  appointments?: Array<Appointment>;
};
