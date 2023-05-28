import './App.css';
import LoginImg from "./components/loginImg.js"
import Libros from "./components/libros.js"
import LibrosAdmin from "./components/librosAdmin.js"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import React, { useRef } from 'react';
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App" >

      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginImg />}/>
            <Route path='/libros' element={<Libros />}/>
            <Route path='/librosAdmin' element={<LibrosAdmin />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
