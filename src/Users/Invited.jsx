import * as React from "react";
import { NavLink} from 'react-router-dom';
import SpacingGrid from '../Components/AvailabilityPie';
import Taxes from '../Components/Tarifas';

export default function Invited() {
  return (
    <>
      <div>
        <SpacingGrid/>
        <Taxes/>
      </div>
        <p>
        ¿Ya tienes una cuenta?
        <NavLink to='/login' sx={{
          textDecoration: 'none',
          fontWeight: '600',
          paddingLeft: '0.5rem',
          cursor: 'pointer'
        }}>
            Acceder
        </NavLink>
      </p>
    </> 
  )
}
