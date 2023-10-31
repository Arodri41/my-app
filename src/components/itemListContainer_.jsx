import React from "react"
import { Card, Form } from "react-bootstrap";
import { FormatoMoneda } from "../items/Moneda";
let producto = require('../items/productos.json');


export function producto({id, nombre, precio, img}){
  return( 
<Card>
  <Card.img variant="top" src={img} height="200px" style= {objectFit= "cover" } />
  <Card.Body className="d-flex flex-column">
    <Card.Title>
      <span className="fs-2">{nombre}</span>
      <span className="ms-2">{FormatoMoneda(precio)}</span>
    </Card.Title>
    <div className="mt-auto">

    </div>
  </Card.Body>
</Card>

  )
}