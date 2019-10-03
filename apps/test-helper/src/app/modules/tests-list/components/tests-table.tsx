import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Test, TestResults } from '../store/tests.interface';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const TestsTable: React.FC<{tests: Test[]}> = ({tests}: {tests: Test[]}) => {
  const dataSets = tests.map((test: Test) =>
    <tr key={test.id}>
      <td><Nav.Link href={test.gerritReview}>{test.reviewName}</Nav.Link></td>
      <td><Nav.Link href={`https://jiradc.com/${test.jiraTask}`}>{test.jiraTask}</Nav.Link></td>
      <td>{test.results.status}</td>
      <td>{test.domain}</td>
      <td>{test.owner.name}</td>
      <td>{test.tester? test.tester.name : 'Unassigned'}</td>
      <td>
        {
          test.results.status === TestResults.OPEN &&
            <div>
              <Button variant="light"><Link className="nav-link" to={`/test/${test.id}`}>
                Pick me, pick me!
              </Link></Button>
            </div>
        }
        {
          test.results.status === TestResults.IN_PROGRESS &&
            <div>
              <Button variant="danger"><Link className="nav-link" to={`/test/${test.id}`}>
                Fail me, nooooo!
              </Link></Button>
              <Button variant="success"><Link className="nav-link" to={`/test/${test.id}`}>
                Pass me, yeeey!
              </Link></Button>
            </div>
        }
      </td>
    </tr>
  );
  return (
    <Table responsive={true}>
      <thead><tr>
        <th>Name</th>
        <th>Jira</th>
        <th>Status</th>
        <th>Domain</th>
        <th>Owner name</th>
        <th>Tester name</th>
        <th/>
      </tr></thead>
      <tbody>
       {dataSets}
      </tbody>
    </Table>
  );
};

export default TestsTable;
