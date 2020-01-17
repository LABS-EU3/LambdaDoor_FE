import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import TopRatedCard from './TopRatedCard';
import { getTopRatedReviews } from '../../state/actions/topRatedReviews';
import { interviewReviews } from '../../utils/data';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
`;

const TopRatedList = ({
  getTopRatedReviews,
  topRatedReviews: { topRatedReviews },
}) => {
  useEffect(() => {
    getTopRatedReviews();
  }, []);
  return (
    <StyledDiv>
      {topRatedReviews.map(topRated => (
        // eslint-disable-next-line react/no-array-index-key
        <TopRatedCard
          key={`${topRated.id}`}
          text={topRated.description || 'Its A beautiful Day to be alive'}
          name={topRated.name}
          id={topRated.id}
          rating={topRated.average_rating}
        />
      ))}
    </StyledDiv>
  );
};

export default connect(state => state, { getTopRatedReviews })(TopRatedList);
