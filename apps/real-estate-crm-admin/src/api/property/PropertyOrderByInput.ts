import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  address?: SortOrder;
  price?: SortOrder;
  bedrooms?: SortOrder;
  bathrooms?: SortOrder;
  squareFootage?: SortOrder;
  description?: SortOrder;
  available?: SortOrder;
};
