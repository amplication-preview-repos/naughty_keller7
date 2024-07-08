import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  email?: SortOrder;
  address?: SortOrder;
  dateOfBirth?: SortOrder;
  lastName?: SortOrder;
  phoneNumber?: SortOrder;
};
