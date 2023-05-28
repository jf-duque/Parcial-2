import Card from 'react-bootstrap/Card';
import React, { useRef } from 'react';

const { useEffect, useState } = require("react");

function Libro(props){

    const [libro, setLibro] = useState([]);

    function detail(){

        props.handleClick(libro);

        fetch("http://localhost:4000/books/"+props.libro.id)
        .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error en la solicitud.');
        }
        })
        .then(data => {
        setLibro(data);
        console.log(data);
        })
        .catch(error => {
        console.error(error);
        });
    }


   return(
       <Card style={{ width: '18rem', height: '24rem' }} className="mb-3" onClick={detail}>
           <Card.Img style={{ height: '14rem' }}  variant="top" src={props.libro.image} alt={props.libro.isbn} />
           <Card.Body>
               <Card.Title>{props.libro.name}</Card.Title>
               <Card.Text>
                   <p>ISBN: {props.libro.isbn}</p>
               </Card.Text>
           </Card.Body>
       </Card>
   );
}

export default Libro;