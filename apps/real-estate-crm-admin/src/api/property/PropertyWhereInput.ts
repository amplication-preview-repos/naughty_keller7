import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type PropertyWhereInput = {
  id?: StringFilter;
  address?: StringNullableFilter;
  price?: FloatNullableFilter;
  bedrooms?: IntNullableFilter;
  bathrooms?: IntNullableFilter;
  squareFootage?: FloatNullableFilter;
  description?: StringNullableFilter;
  available?: BooleanNullableFilter;
  appointments?: AppointmentListRelationFilter;
};
