/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Full Stack Developer', value: 600, id: 1 },
  { name: 'Front End Developer', value: 300, id: 2 },
  { name: 'Back End Developer', value: 300, id: 3 },
  { name: 'Data Scientist', value: 200, id: 4 },
];

const COLORS = ['#40A9FF', '#0C3C78', '#096DD9', '#ACD8FD'];

const renderLegend = props => {
  const { payload } = props;

  return (
    <LegendList>
      {data.map((entry, index) => (
        <li key={entry.id}>
          <span
            style={{
              background: `${COLORS[index % COLORS.length]}`,
            }}
          />
          {entry.name}
        </li>
      ))}
    </LegendList>
  );
};

const JobTitleVisualization = () => {
  return (
    <StyledContainer>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          innerRadius={50}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={entry.id} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <Legend verticalAlign="right" content={renderLegend} />
    </StyledContainer>
  );
};

export default JobTitleVisualization;

const LegendList = styled.ul`
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
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;

  .recharts-legend-wrapper {
    position: static !important;
    top: unset !important;
    left: unset !important;
  }
`;
