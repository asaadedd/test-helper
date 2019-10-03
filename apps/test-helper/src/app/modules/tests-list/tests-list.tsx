import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useEffect } from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import SearchIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {FormControl} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { selectAllTests } from './store/tests.selectors';
import TestsTable from './components/tests-table';
import { updateTests } from './store/tests.actions';

const TestsList: React.FC = () => {
  const tests = useSelector(selectAllTests);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTests());
  }, []);

  return (
      <Container fluid={true}>
          <Row>
              <Col lg={3}>
                  <InputGroup>
                      <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1"><SearchIcon/></InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                          placeholder=""
                          aria-label=""
                          aria-describedby="basic-addon1"
                      />
                  </InputGroup>
              </Col>
          </Row>
          <Row><TestsTable tests={tests}/></Row>
      </Container>
  );
};

export default TestsList;
