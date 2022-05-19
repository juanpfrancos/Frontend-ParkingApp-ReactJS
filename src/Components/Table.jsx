import * as React from "react"
import { useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Switch from "@mui/material/Switch"
import Button from '@mui/material/Button'
import AuthService from "../Services/AuthService"


export default function Table(props) {
  const [selectionModel, setSelectionModel] = useState([]);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(true);
  const handleEnableMultipleSelectionChange = () =>
    setEnableMultipleSelection(!enableMultipleSelection);

  
  const [button, setButton]=useState(false); /*Enable or disable button*/

  const regOut = (sel) =>{
    sel.map((item)=>AuthService.salida(item))
  }

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
