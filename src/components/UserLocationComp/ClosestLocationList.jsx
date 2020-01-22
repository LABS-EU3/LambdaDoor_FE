import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ClosestLocationCard from './ClosestLocationCard';
import { getClosestCompanies } from '../../state/actions/closestCompanies';
import { interviewReviews } from '../../utils/data';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
`;

const ClosestLocationList = ({
  getClosestCompanies,
  closestCompanies: { closestCompanies },
}) => {
  useEffect(() => {
    getClosestCompanies();
    console.log(closestCompanies);
  }, []);
  return (
    <StyledDiv>
      {closestCompanies.map(closest => (
        // eslint-disable-next-line react/no-array-index-key
        <ClosestLocationCard
          key={`${closest.id}`}
          text={closest.description || 'Its A beautiful Day to be alive'}
          name={closest.name}
          id={closest.id}
          website={closest.website}
        />
      ))}
    </StyledDiv>
  );
};

export default connect(state => state, { getClosestCompanies })(
  ClosestLocationList
);
