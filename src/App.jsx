import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Home from './Home';
import Login from './Users/Login';
import SignUp from './Users/SignUp';
import Tables from './Components/Client';
import Ingreso from './Components/Ingreso';
import Taxes from './Components/Tarifas';
function App() {
  return (
  <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<SignUp/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/client' element={<Tables/>} />
          <Route path='/client' element={<Taxes/>} />
          <Route path='/ingreso' element={<Ingreso/>} />
        </Routes>
      </BrowserRouter>
  </ThemeProvider>
  )
}

export default App
