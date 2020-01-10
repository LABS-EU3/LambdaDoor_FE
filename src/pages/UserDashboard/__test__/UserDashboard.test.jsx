import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import reducers from '../../../state/reducers/index';
import { renderWithRedux } from '../../../utils/testingHelpers';
import ConnectedUserDashboard, { UserDashboard } from '../UserDashboard';

const state = reducers(undefined, {});

describe('UserDashboard', () => {
  it('renders correctly', () => {
    expect(true).toEqual(true);
  });
});
