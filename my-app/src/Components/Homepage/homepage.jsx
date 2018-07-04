import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Homepage extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleSearch" className="mr-sm-2">Summoner 1</Label>
          <Input type="search" name="search" id="exampleSearch" placeholder="1" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleSearch" className="mr-sm-2">Summoner 2</Label>
          <Input type="search" name="search" id="exampleSearch" placeholder="2" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
