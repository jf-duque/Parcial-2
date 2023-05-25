
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { createContext, useContext, useRef } from 'react';
import image from "./portada.png";

function LoginImg(props) {


    return (
        <div style={{ display: 'block', width: 600, padding: 30, backgroundColor: "white" }}>
            <Row>
                <Col>
                    <img src={image} />
                </Col>
                <Col>
                    <h1>Tu Libreria Aliada</h1>
                    <form>
                    <label style={{color: "grey"}}>Users name or Email:
                        <input
                        type="email" 
                        />
                    </label>
                    <label style={{color: "grey"}}>Password:
                        <input
                        type="Password" 
                        />
                    </label>
                    <hr></hr>
                    <button id='bt' type='submit'>
                        Sing In
                    </button>
                    </form>
                </Col>
            </Row>
        </div>

    );
}

export default LoginImg;