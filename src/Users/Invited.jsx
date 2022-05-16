import * as React from "react";
import { NavLink} from 'react-router-dom';
import SpacingGrid from '../Components/AvailabilityPie'

export default function Invited() {
  return (
    <>
        <SpacingGrid/>
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
