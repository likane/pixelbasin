import React from 'react'
import { Row, Col, Button, Card} from 'react-bootstrap';

const AltResults = () => {
  return (
    <>
    <Row>
      <Col>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Col>
    </Row>
    </>
  )
}

export default AltResults
