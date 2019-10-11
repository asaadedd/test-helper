import React, { useEffect, useState } from 'react';
import { Domains, Test } from '../../tests-list/store/tests.interface';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import StringFormGroup from './form-group';
import SelectFormGroup from './select-form-group';

const TestInfo: React.FC<{testInfo: Test}> = ({testInfo}: {testInfo: Test}) => {
  const [id, setId] = useState(testInfo.id);
  const [reviewName, setReviewName] = useState(testInfo.reviewName);
  const [jiraTask, setJiraTask] = useState(testInfo.jiraTask);
  const [gerritReview, setGerritReview] = useState(testInfo.gerritReview);
  const [description, setDescription] = useState(testInfo.description);
  const [domain, setDomain] = useState(testInfo.domain as string);
  return (
    <Form>
      <StringFormGroup name={'Test Id'} value={id} onChange={setId}/>
      <StringFormGroup name={'Review Name'} value={reviewName} onChange={setReviewName}/>
      <StringFormGroup name={'Jira Task'} value={jiraTask} onChange={setJiraTask}/>
      <StringFormGroup name={'Gerrit Review'} value={gerritReview} onChange={setGerritReview}/>
      <StringFormGroup name={'Description'} value={description} onChange={setDescription}/>
      <SelectFormGroup name={'Domain'} value={domain} options={[Domains.DIAG, Domains.FM, Domains.PM, Domains.UAM]}
                       onChange={setDomain}/>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TestInfo;
