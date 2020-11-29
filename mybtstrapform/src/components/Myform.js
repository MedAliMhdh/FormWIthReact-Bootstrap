import React from "react";
import Form from "react-bootstrap/Form";
import "./Myform.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function Myform() {
  return (
    <div className="Myform">
      <h2 id="FormTitle">Application Form</h2>
      <Form>
        <Form.Label>Personal Informations</Form.Label>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" placeholder="First name" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" placeholder="Last name" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md="6">
            <Form.Label>Country</Form.Label>
            <Form.Control required as="select" custom>
              <option>Tunisia</option>
              <option>France</option>
              <option>Belgium</option>
              <option>UK</option>
              <option>Germany</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="House number and street name" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md="6">
            <Form.Label>how did you heard about us</Form.Label>
            <Form.Control required as="select" custom>
              <option>Tanit Job</option>
              <option>Monster</option>
              <option>Apec</option>
              <option>Indeed</option>
              <option>Linkedin</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Check
            type="checkbox"
            label="By signing up you agree to our terms & conditions and privacy policy "
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Myform;
