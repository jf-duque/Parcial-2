import Libro from "./libro";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useRef } from 'react';
import { FormattedMessage } from 'react-intl';


const { useEffect, useState } = require("react");

function Libros () {

   const [selectedLibro, setSelectedLibro] = useState(null);
   const [libros, setLibros] = useState([]);

   useEffect(()=>{
       const URL = "http://localhost:4000/books";
       fetch(URL).then(data => data.json()).then(data => {
           setLibros(data);
       })
   }, []);

   const handleLibroClick = (libro) => {
    setSelectedLibro(libro);
   };

   return(
       <div className="container">
           <h1><FormattedMessage id="BookList"/></h1>
           <hr></hr>

           <Row>
                <Col>
                    <div>
                        <Row sm={9}>
                            {libros.map(libro => <Col><Libro libro={libro} key={libro.id} handleClick={handleLibroClick}/></Col>)}               
                        </Row>
                    </div>
                </Col>
                <Col sm={3}>
                    <div style={{border: '1px solid black', padding: '20px', borderRadius: '5px', textAlign:'left'}}>
                        <h3 style={{textAlign: 'center'}}>{selectedLibro?.name}</h3>
                        <hr></hr>
                        <Row>
                            <Col xs={4}>
                                <h6>ISBN: </h6>
                            </Col>
                            <Col xs={8}>
                                <p>{selectedLibro?.isbn}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                                <h6><FormattedMessage id="Author"/>: </h6>
                            </Col>
                            <Col xs={8}>
                                <p>{selectedLibro?.author}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                                <h6><FormattedMessage id="Publisher"/>: </h6>
                            </Col>
                            <Col xs={8}>
                                <p>{selectedLibro?.publisher}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                                <h6><FormattedMessage id="Genre"/>: </h6>
                            </Col>
                            <Col xs={8}>
                                <p>{selectedLibro?.gender}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                                <h6><FormattedMessage id="Year"/>: </h6>
                            </Col>
                            <Col xs={8}>
                                <p>{selectedLibro?.year}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                                <h6><FormattedMessage id="Available"/>: </h6>
                            </Col>
                            <Col xs={8}>
                                <p>{selectedLibro?.available_online ? 'Sí' : 'No'}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                                <h6><FormattedMessage id="Price"/>: </h6>
                            </Col>
                            <Col xs={8}>
                                <p>{selectedLibro?.price}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                                <h6><FormattedMessage id="Summary"/>: </h6>
                            </Col>
                            <Col xs={8}>
                                <p>{selectedLibro?.summary}</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
           </Row>
      
       </div>
   )
}

export default Libros;