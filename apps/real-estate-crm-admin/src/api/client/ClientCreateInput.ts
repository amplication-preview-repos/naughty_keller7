import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  firstName?: string | null;
  email?: string | null;
  address?: string | null;
  dateOfBirth?: Date | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
};
