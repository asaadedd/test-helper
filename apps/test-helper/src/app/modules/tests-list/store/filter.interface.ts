import { Domains, TestResults } from './tests.interface';

export interface FilterStore {
  owner?: string;
  tester?: string;
  result?: TestResults;
  domain?: Domains;
  creationDate?: string;
  resultsDate?: string;
}
