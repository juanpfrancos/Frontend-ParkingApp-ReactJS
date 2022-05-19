import * as React from "react"
import { useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import AuthService from "../Services/AuthService"


export default function Table(props) {

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={props.data}
        columns={props.col}
        getRowId={props.id}
        hideFooter={true}
        checkboxSelection={false}
        disableSelectionOnClick={true}
        bulkActionButtons={true}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
}
