import React from 'react';
// import { Col, Row, Container } from "../components/Grid";
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class AdminTable  extends React.Component {
  render() {
    return (
       <Container fluid>
        <Row>
         <Col xs="6" sm="4">

      <Form>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input type="text" name="firstName" id="firstName"/>
          <Label for="lastName">Last Name</Label>
          <Input type="text" name="lastName" id="lastName"/>
          <Label for="fireNumber">Fire Number</Label>
          <Input type="text" name="fireNumber" id="fireNumber"/>
          <Label for="memberSince">Member Since Year</Label>
          <Input type="text" name="memberSince" id="memberSince"/>
          <Label for="title">Title</Label>
          <Input type="text" name="memberSince" id="title"/>
          <Label for="rank">Rank</Label>
          <Input type="select" name="rank" id="rank">
            <option>Fire Fighter</option>
            <option>Officer</option>
          </Input>
          <Label for="station">Station</Label>
          <Input type="select" name="station" id="station">
            <option>Station #1</option>
            <option>Station #2</option>
          </Input>
          <Label for="company">Company</Label>
          <Input type="select" name="company" id="company">
            <option>Company A</option>
            <option>Company B</option>
            <option>Company C</option>
          </Input>
        </FormGroup>
       
        <Button>Submit</Button>
      </Form>

        </Col>
    </Row>
  </Container>
    );
  }
}