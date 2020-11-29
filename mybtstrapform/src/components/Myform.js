import React from "react";
import "./Myform.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function Myform() {
  return (
    <div className="Myform">
      <h2 id="FormTitle">Job Title</h2>
      <div className="FormSection">
        <Form>
          <Form.Label>
            <p className="SectionTitle">Personal Informations</p>
          </Form.Label>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>First name</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last name</Form.Label>
              <Form.Control required type="text" />
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
            <Form.Control />
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
        </Form>
      </div>
      <div className="FormSection">
        <Form>
          <Form.Label>
            <p className="SectionTitle">professional experience</p>
          </Form.Label>
          <Form.Group>
            <Form.Label>Job designation</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>From</Form.Label>
              <Form.Control type="text" placeholder="DD/MM/YYYY" />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>To</Form.Label>
              <Form.Control type="text" placeholder="DD/MM/YYYY" />
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Label>Role discription</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button type="submit">Add Experience</Button>
        </Form>
        <Form>
          <Form.Group>
            <Form.File name="file" label="Attach your resume" />
          </Form.Group>
          <Form.Group>
            <Form.Check
              required
              type="checkbox"
              label="By signing up you agree to our terms and conditions and privacy policy "
            />
          </Form.Group>
        </Form>
      </div>

      <Form>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
}

export default Myform;
