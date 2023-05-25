import './App.css';
import LoginImg from "./components/loginImg.js"
import Libros from "./components/libros.js"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import React, { useRef } from 'react';

function App() {
  return (
    <div className="App" >

      <div style={{padding: "100px", backgroundColor: "grey"}}>
        <LoginImg></LoginImg>
      </div>
      <div>
        <Row>
          <Col xs={8}>
            <Libros></Libros>
          </Col>
          <Col>
            <h1>se supone va el detail</h1>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
