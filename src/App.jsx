import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Home from './Home';
import Login from './Services/Login';
import SignUp from './Services/SignUp';
import Ingreso from './Components/Ingreso';
import Taxes from './Components/Tarifas'
import Invited from './Users/Invited';


function App() {
  return (
  <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Invited />} />
          <Route path='/register' element={<SignUp/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/ingreso' element={<Ingreso/>} />
          <Route path='/taxes' element={<Taxes/>} />
        </Routes>
      </BrowserRouter>
  </ThemeProvider>
  )
}

export default App
