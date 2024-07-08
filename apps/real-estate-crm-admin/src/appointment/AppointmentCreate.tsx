import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PropertyTitle } from "../property/PropertyTitle";
import { ClientTitle } from "../client/ClientTitle";

export const AppointmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Time" source="time" />
        <TextInput label="Notes" multiline source="notes" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Agent" source="agent" />
        <ReferenceInput
          source="property.id"
          reference="Property"
          label="Property"
        >
          <SelectInput optionText={PropertyTitle} />
        </ReferenceInput>
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
