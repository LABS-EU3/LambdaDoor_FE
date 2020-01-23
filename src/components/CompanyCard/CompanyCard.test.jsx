import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CompanyCard from './CompanyCard';

const testArray = [
  {
    id: 6,
    name: 'Newfront Insurance',
    description: '',
    website: 'https://www.newfrontinsurance.com',
    location: 'San Francisco, CA',
    type: 'insurance',
    logo: '',
    latitude: 31,
    longitude: -80,
    average_rating: null,
  },
  {
    id: 12,
    name: 'Chipper Cash',
    description: '',
    website: 'https://chippercash.com/',
    location: 'Lagos, NG',
    type: 'FinTech',
    logo: '',
    latitude: 31,
    longitude: -80,
    average_rating: null,
  },
];

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '6',
  }),
}));

afterEach(cleanup);

describe('Tests for CompanyCard ', () => {
  test('renders component', () => {
    const { getByText } = render(<CompanyCard companies={testArray} />);

    expect(getByText('Newfront Insurance')).toBeTruthy();
    expect(getByText('Company Type: insurance')).toBeTruthy();
    expect(getByText('San Francisco, CA')).toBeTruthy();
  });
});
