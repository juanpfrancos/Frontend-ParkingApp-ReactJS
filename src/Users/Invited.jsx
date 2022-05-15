import * as React from "react";
import SpacingGrid from '../Components/AvailabilityPie'
import Tables from '../Components/Table';
import Taxes from './Tarifas';

export default function Invited() {
  return (
   <>
        <Taxes/>
        <SpacingGrid/>
        <Tables/>
   </> 
  )
}
