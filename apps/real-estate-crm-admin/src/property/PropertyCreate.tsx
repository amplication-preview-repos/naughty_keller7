import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";

export const PropertyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <NumberInput label="Price" source="price" />
        <NumberInput step={1} label="Bedrooms" source="bedrooms" />
        <NumberInput step={1} label="Bathrooms" source="bathrooms" />
        <NumberInput label="SquareFootage" source="squareFootage" />
        <TextInput label="Description" multiline source="description" />
        <BooleanInput label="Available" source="available" />
        <ReferenceArrayInput
          source="appointments"
          reference="Appointment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
