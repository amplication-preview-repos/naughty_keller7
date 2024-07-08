import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  firstName?: string | null;
  email?: string | null;
  address?: string | null;
  dateOfBirth?: Date | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
};
