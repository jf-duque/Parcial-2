import Card from 'react-bootstrap/Card';
import React, { useRef } from 'react';

function Libro(props){
   return(
       <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">
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