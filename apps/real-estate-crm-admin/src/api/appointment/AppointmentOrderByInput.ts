import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  time?: SortOrder;
  notes?: SortOrder;
  date?: SortOrder;
  agent?: SortOrder;
  propertyId?: SortOrder;
  clientId?: SortOrder;
};
