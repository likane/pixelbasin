import React from 'react'
import {Spinner, Row, Col} from 'react-bootstrap';

const Loading = () => {
  return (
    <>
        <Row className='position-absolute top-50 start-50 translate-middle'>
            <Col></Col>
            <Col>
                <h1 className='position-absolute top-50 start-50 translate-middle' ><Spinner animation="border" variant="primary" className='center align-middle mx-auto'  /></h1>
            </Col>
            <Col></Col>
        </Row>
    </>
  )
}

export default Loading
