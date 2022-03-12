import React from 'react'
import { Row, Col, Card} from 'react-bootstrap';

const AltResults = () => {
  return (
    <>
    <Row>
      <Col>
      <Card className="text-center">
        <Card.Header>Ooops...</Card.Header>
        <Card.Body>
          <Card.Title>It appears something went wrong</Card.Title>
          <Card.Text>
            Please try searching again or come back later.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    </Row>
    </>
  )
}

export default AltResults
