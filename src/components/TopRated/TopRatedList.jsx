/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import TopRatedCard from './TopRatedCard';
import { getTopRatedReviews } from '../../state/actions/topRatedReviews';

const TopRatedList = ({
  isFetching,
  getTopRatedReviews,
  topRatedReviews: { topRatedReviews },
}) => {
  useEffect(() => {
    getTopRatedReviews();
  }, []);
  return (
    <StyledDiv>
      {!isFetching ? (
        <>
          {topRatedReviews.length !== 0 ? (
            topRatedReviews.map(topRated => (
              // eslint-disable-next-line react/no-array-index-key
              <TopRatedCard
                key={`${topRated.id}`}
                text={topRated.description || 'Its A beautiful Day to be alive'}
                name={topRated.name}
                id={topRated.id}
                rating={topRated.average_rating}
              />
            ))
          ) : (
            <div className="empty-state">
              <p>No data to display</p>
            </div>
          )}
        </>
      ) : (
        <div className="empty-state">
          <Spin />
        </div>
      )}
    </StyledDiv>
  );
};

export default connect(state => state, { getTopRatedReviews })(TopRatedList);

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  position: relative;
  min-height: 300px;

  .cards {
    position: relative;
    min-height: 150px;

    a {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      padding: 1rem;
      color: rgba(0, 0, 0, 0.65);
      border: 1px solid #e8e8e8;
      border-radius: 2px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    h3 {
      font-weight: 600;
      font-size: 1rem;
    }

    .ant-rate,
    .ant-rate-star-first,
    .ant-rate-star-second {
      height: 20px;
      width: fit-content;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .ant-rate-star-first i,
    .ant-rate-star-second i {
      font-size: 14px;
    }

    .ant-rate-star:not(:last-child) {
      margin-right: 3px;
    }
  }
`;
