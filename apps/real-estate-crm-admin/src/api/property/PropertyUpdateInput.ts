import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  price?: number | null;
  bedrooms?: number | null;
  bathrooms?: number | null;
  squareFootage?: number | null;
  description?: string | null;
  available?: boolean | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
};
