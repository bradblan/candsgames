import React from "react"
import { Form, Container } from "react-bootstrap"

export default class QuoteForm extends React.Component {
  render() {
    return (
      <div class="quoteBox">
        <h2>Free Custom Quote</h2>
        <p>
          Provide us with a few details, and we'll send you a quote on a custom
          designed Cornhole game set.
        </p>
        <Container>
          <Form name="FreeQuote" action="../../aspmailform.asp" method="post">
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control required type="text" size="lg" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="text"
                size="lg"
                pattern="^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$"
                placeholder="someone@somewhere.com"
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Please enter a valid email address
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="spec">
              <Form.Label>Design Specifications</Form.Label>
              <Form.Control required as="textarea" rows="3" />
            </Form.Group>
            <button class="btn btn-lg csg-btn-action" type="submit">
              Submit
            </button>
          </Form>
        </Container>
      </div>
    )
  }
}
