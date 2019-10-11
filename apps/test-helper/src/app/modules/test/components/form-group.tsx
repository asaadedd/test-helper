import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

interface StringFormGroupProps {
  name: string;
  value: any;
  onChange: (value: string) => void
}

const StringFormGroup: React.FC<StringFormGroupProps> = ({name, value, onChange}) => {
  return (
    <Row><Col lg={3}>
      <Form.Group controlId={name}>
        <Form.Label>{ name }</Form.Label>
        <Form.Control type="string"
                      value={value}
                      placeholder={name}
                      onChange={(event) => onChange(event.target.value)}/>
      </Form.Group>
    </Col></Row>
  );
};

export default StringFormGroup;
