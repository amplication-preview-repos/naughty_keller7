import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const PropertyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Properties"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Address" source="address" />
        <TextField label="Price" source="price" />
        <TextField label="Bedrooms" source="bedrooms" />
        <TextField label="Bathrooms" source="bathrooms" />
        <TextField label="SquareFootage" source="squareFootage" />
        <TextField label="Description" source="description" />
        <BooleanField label="Available" source="available" />
      </Datagrid>
    </List>
  );
};
