import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function Table(props) {
  const [selectionModel, setSelectionModel] = useState([]);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(true);
  const handleEnableMultipleSelectionChange = () =>
    setEnableMultipleSelection(!enableMultipleSelection);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={enableMultipleSelection}
              onChange={handleEnableMultipleSelectionChange}
            />
          }
          label="Multiple selection"
        />
      </FormGroup>
      <DataGrid
        rows={props.data}
        columns={props.col}
        getRowId={props.id}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection={true}
        selectionModel={selectionModel}
        onSelectionModelChange={(selection) => {
          if (!enableMultipleSelection && selection.length > 1) {
            const selectionSet = new Set(selectionModel);
            const result = selection.filter((s) => !selectionSet.has(s));
            setSelectionModel(result);
          } else {
            setSelectionModel(selection);
          }
        }}
        disableSelectionOnClick={true}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
}
