import React from "react"
import { Col, Row } from "react-bootstrap"
import productos from "../items/productos.json"
import { json } from "react-router-dom"
import { producto } from "../components/itemListContainer_"

export function productos() {
  return ( 
  <>
    <h1> inicio </h1>
    <Row xs={1} md={2} xl={3} className="g-3">
      {productos.map(item => (
        <Col key={item.id}> 
        <producto {...item} /> 
        </Col>
      )) }
    </Row>
  
  
  </>
  )
}