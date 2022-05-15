import * as React from "react";
import { useState } from "react";
import SpacingGrid from '../Components/AvailabilityPie'
import Tables from '../Components/Table';
import Taxes from './Tarifas';

export default function Operator() {
  return (
   <>
        <Taxes/>
        <SpacingGrid/>
        <Tables/>
   </> 
  )
}
