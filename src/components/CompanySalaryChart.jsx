/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  Cell,
} from 'recharts';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { getAvgSalaries } from '../state/actions/avgSalaries';

const COLOURS = [
  '#1E5896',
  '#ABE7DD',
  '#368DA7',
  '#EBEBCE',
  '#6ABAC5',
  '#BAD38F',
  '#83D0BC',
  '#0C3C78',
  '#D2E3D0',
];

const CompanySalaryChart = ({ isFetching, getAvgSalaries, avgSalaries }) => {
  const { id } = useParams();
  console.log(avgSalaries);
  useEffect(() => {
    getAvgSalaries(id);
  }, []);

  return (
    <StyledDiv>
      <h3>
        Average Company Salaries in &nbsp;
        {avgSalaries.avgSalaries && avgSalaries.avgSalaries[0].currency}
      </h3>
      {!isFetching ? (
        <>
          {avgSalaries.avgSalaries && avgSalaries.avgSalaries.length !== 0 ? (
            <>
              <BarChart
                width={500}
                height={300}
                data={avgSalaries.avgSalaries}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="interest">
                  <Label value="Job Role" position="insideBottom" offset={-5} />
                </XAxis>

                <YAxis dataKey="avg">
                  {/* {avgSalaries.avgSalaries && (
                    <Label
                      value={`${avgSalaries.avgSalaries[0].currency}`}
                      position="insideBottom"
                      angle={-90}
                      offset={0}
                    />
                  )} */}
                </YAxis>
                <Tooltip />
                <Bar dataKey="avg" barSize={100}>
                  {avgSalaries.avgSalaries &&
                    avgSalaries.avgSalaries.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLOURS[index]} />
                    ))}
                </Bar>
              </BarChart>
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
    </StyledDiv>
  );
};

export default connect(state => state, { getAvgSalaries })(CompanySalaryChart);

const StyledDiv = styled.div`
  width: 500px;
  height: 500px;
`;
