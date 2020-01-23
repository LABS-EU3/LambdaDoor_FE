/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import ClosestLocationCard from './ClosestLocationCard';
import { getClosestCompanies } from '../../state/actions/closestCompanies';

export const ClosestLocationList = ({
  isFetching,
  getClosestCompanies,
  closestCompanies: { closestCompanies },
}) => {
  useEffect(() => {
    getClosestCompanies();
  }, []);
  return (
    <StyledContainer>
      {!isFetching ? (
        <>
          {closestCompanies.length !== 0 ? (
            closestCompanies.map(closest => (
              // eslint-disable-next-line react/no-array-index-key
              <ClosestLocationCard
                key={`${closest.id}`}
                text={closest.description || 'Its A beautiful Day to be alive'}
                name={closest.name}
                id={closest.id}
                website={closest.website}
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
    </StyledContainer>
  );
};

export default connect(state => state, { getClosestCompanies })(
  ClosestLocationList
);

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  min-height: 100%;
  position: relative;
  min-height: 150px;

  .cards {
    position: relative;
    min-height: 150px;

    a.nav-link {
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
