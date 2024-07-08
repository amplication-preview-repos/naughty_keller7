import { Property } from "../property/Property";
import { Client } from "../client/Client";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  time: Date | null;
  notes: string | null;
  date: Date | null;
  agent: string | null;
  property?: Property | null;
  client?: Client | null;
};
