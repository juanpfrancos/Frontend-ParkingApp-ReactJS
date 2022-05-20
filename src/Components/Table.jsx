import * as React from "react"
import { useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import AuthService from "../Services/AuthService"


export default function Table(props) {

  return (
      <DataGrid
        style={{ height: 214, width: "90%" }}
        rows={props.data}
        columns={props.col}
        getRowId={props.id}
        hideFooter={true}
        checkboxSelection={false}
        disableSelectionOnClick={true}
        bulkActionButtons={true}
        experimentalFeatures={{ newEditingApi: true }}
      />
  );
}
