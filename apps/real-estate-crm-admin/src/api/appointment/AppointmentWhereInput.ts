import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type AppointmentWhereInput = {
  id?: StringFilter;
  time?: DateTimeNullableFilter;
  notes?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  agent?: StringNullableFilter;
  property?: PropertyWhereUniqueInput;
  client?: ClientWhereUniqueInput;
};
