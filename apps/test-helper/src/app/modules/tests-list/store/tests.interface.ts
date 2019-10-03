export interface Test {
  id: string;
  reviewName: string;
  jiraTask: string;
  gerritReview: string;
  description: string;
  domain: Domains;
  creationData: string;
  owner: {
    name: string;
    email: string;
  };
  tester?: {
    name: string;
    email: string;
  };
  results: {
    status: TestResults,
    description?: string;
    fileNames: string[];
    date: string;
  }
}

export enum TestResults {
  OPEN = 'Open',
  IN_PROGRESS = 'In Progress',
  FAILED = 'Failed',
  PASSED = 'Passed'
}

export enum Domains {
  PM = 'PM',
  FM = 'FM',
  UAM = 'UAM',
  DIAG = 'DIAG'
}
