import logo from './logo.svg';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PersonajesList from "./components/Personajes/Personajes"
import Lugares from "./components/Donde/Donde"
import Pie from "./components/Footer/Footer"
import Menu from "./components/Navbar/Navbar"
import Principal from "./components/Home/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/home" element={<Principal />} /> 
          <Route path="/personajes" element={<PersonajesList />} />
          <Route path="/donde" element={<Lugares />} /> 
        </Routes>
      </BrowserRouter>
      <Pie />
    </>
  );
}

export default App;
