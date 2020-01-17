/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { getJobRoles } from '../state/actions/jobroles';

const data = [
  { interest: 'Front End', id: uuid(), count: 0 },
  { interest: 'Back End', id: uuid(), count: 0 },
  { interest: 'Full Stack', id: uuid(), count: 0 },
  { interest: 'Data Science', id: uuid(), count: 0 },
  { interest: 'Machine Learning', id: uuid(), count: 0 },
  { interest: 'User Experience', id: uuid(), count: 0 },
  { interest: 'Mobile Development', id: uuid(), count: 0 },
  { interest: 'Product Manager', id: uuid(), count: 0 },
];

const JobTitleVisualization = ({ isFetching, jobroles, getJobRoles }) => {
  const [state, setState] = useState([]);
  const [colors] = useState([]);

  useEffect(() => {
    getJobRoles();
  }, []);

  useEffect(() => {
    const roles = [...jobroles];
    data.forEach(item => {
      const index = roles.findIndex(e => e.interest === item.interest);

      if (index === -1) {
        roles.push(item);
      }
    });
    roles.forEach(() => {
      colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    });
    setState(
      roles.map(item => {
        return {
          ...item,
          count: parseInt(item.count, 10),
        };
      })
    );
  }, [jobroles]);

  return (
    <StyledContainer>
      {!isFetching ? (
        <>
          {jobroles.length !== 0 ? (
            <>
              <PieChart width={300} height={300}>
                <Pie
                  data={state}
                  cx={150}
                  cy={150}
                  innerRadius={50}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {state.map((entry, index) => (
                    <Cell key={entry.id} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
              </PieChart>
              <Legend
                verticalAlign="right"
                content={() => (
                  <ul className="legends">
                    {state.map((entry, index) => (
                      <li key={entry.id}>
                        <span
                          style={{
                            background: `${colors[index % colors.length]}`,
                          }}
                        />
                        {entry.interest}
                      </li>
                    ))}
                  </ul>
                )}
              />
            </>
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

const mapStateToProps = state => ({
  isFetching: state.jobroles.isFetching,
  jobroles: state.jobroles.jobroles,
});

export default connect(mapStateToProps, { getJobRoles })(JobTitleVisualization);

const StyledContainer = styled.div`
  display: flex;
  align-items: center;

  .recharts-legend-wrapper {
    position: static !important;
    top: unset !important;
    left: unset !important;
  }

  .legends {
    li {
      list-style-type: none;
      display: flex;
      align-items: center;
      color: #000;
      margin-bottom: 0.75rem;
      font-size: 0.85rem;
    }

    span {
      height: 20px;
      width: 20px;
      margin-right: 0.5rem;
      display: inline-block;
    }
  }

  .empty-state {
    max-width: 400px;
    min-height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
