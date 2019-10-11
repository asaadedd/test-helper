import React, { useState } from 'react';
import TestInfo from './components/test-info';
import { Domains, TestResults } from '../tests-list/store/tests.interface';

const Test: React.FC = () => {
  return (
    <>
      <TestInfo testInfo={{
        id: '2',
        reviewName: 'Update 3',
        jiraTask: 'WEBEM-20125',
        gerritReview: 'https://react-redux.js.org/api/hooks#usedispatch',
        description: 'Description',
        domain: Domains.DIAG,
        creationData: '',
        owner: {
          name: 'asaadedd',
          email: 'a',
        },
        tester: {
          name: 'gicu',
          email: '',
        },
        results: {
          status: TestResults.IN_PROGRESS,
          description: '',
          fileNames: [],
          date: ''
        }
      }}/>
    </>
  );
};

export default Test;
