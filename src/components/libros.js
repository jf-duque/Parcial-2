import Libro from "./libro";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useRef } from 'react';

const { useEffect, useState } = require("react");

function Libros () {

   const [libros, setLibros] = useState([]);
   useEffect(()=>{
       const URL = "http://localhost:3000/books";
       fetch(URL).then(data => data.json()).then(data => {
           setLibros(data);
       })
   }, []);

   return(
       <div className="container">
           <h1>Listado de libros</h1>
           <hr></hr>
           <Row>
               {libros.map(libro => <Col><Libro libro={libro} key={libro.id}/></Col>)}               
           </Row>
          
       </div>
   )
}

export default Libros;