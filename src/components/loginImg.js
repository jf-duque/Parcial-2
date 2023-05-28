import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import image from "./portada.png";
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';

function LoginImg(props) {
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleInputChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const redi = async () => {

    if (emailValue.trim() === '' || passwordValue.trim() === '') {
      alert('Ingresa un email y una contraseña válidos.');
      return;
    }

    if (passwordValue.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if(!emailValue.includes('@')){
      alert('Ingrese un correo valido.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/login', {
        email: emailValue, // Reemplaza con el valor del email ingresado por el usuario
        password: passwordValue // Reemplaza con el valor de la contraseña ingresada por el usuario
      });

      var data = JSON.stringify(response.data);

      data = JSON.parse(data);

      alert('Rol: ' + data.rol);


      if (data.rol === 'Administrador') {
        navigate('/librosAdmin');
      } else {
        navigate('/libros');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ backgroundColor: 'grey', margin: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <div style={{ display: 'block', width: 600, padding: 30, backgroundColor: "white" }}>
          <Row>
            <Col>
              <img src={image} alt="Portada" />
            </Col>
            <Col>
              <h1>Tu Libreria Aliada</h1>
              <form>
                <label style={{ color: "grey" }}><FormattedMessage id="Email"/>:
                  <input type="email" value={emailValue} onChange={handleEmailChange} />
                </label>
                <label style={{ color: "grey" }}><FormattedMessage id="Password"/>:
                  <input type="Password" value={passwordValue} onChange={handleInputChange} />
                </label>
                <hr />
              </form>
              <button onClick={redi}>
                <FormattedMessage id="SingIn"/>
                </button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default LoginImg;
