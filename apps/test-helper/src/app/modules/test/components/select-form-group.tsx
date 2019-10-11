import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface SelectFormGroupProps {
  name: string;
  value: string;
  options: string[];
  onChange: (value: string) => void
}

const SelectFormGroup: React.FC<SelectFormGroupProps> = ({name, value, options, onChange}) => {
  return (
    <Row><Col lg={3}>
      <Form.Group controlId={name}>
        <Form.Label>{ name }</Form.Label>
        <Form.Control as="select" value={value} onChange={(event) => onChange(event.target.value)}>
          {options.map(option =>
            <option>{option}</option>
          )}
        </Form.Control>
      </Form.Group>
    </Col></Row>
  );
};

export default SelectFormGroup;
