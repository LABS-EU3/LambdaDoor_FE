/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import uuid from 'uuid';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  Cell,
} from 'recharts';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { getAvgSalaries } from '../state/actions/avgSalaries';

const startingData = [
  { interest: 'Front End', id: uuid(), avg: 0, currency: 'USD' },
  { interest: 'Back End', id: uuid(), avg: 0, currency: 'USD' },
  { interest: 'Full Stack', id: uuid(), avg: 0, currency: 'USD' },
  { interest: 'Data Science', id: uuid(), avg: 0, currency: 'USD' },
  { interest: 'Machine Learning', id: uuid(), avg: 0, currency: 'USD' },
  { interest: 'User Experience', id: uuid(), avg: 0, currency: 'USD' },
  { interest: 'Mobile Development', id: uuid(), avg: 0, currency: 'USD' },
  { interest: 'Product Manager', id: uuid(), avg: 0, currency: 'USD' },
];

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
  const [state, setState] = useState([]);

  useEffect(() => {
    getAvgSalaries(id);
  }, []);

  useEffect(() => {
    console.log('avgSalaries', avgSalaries);
    const averages = [...avgSalaries.avgSalaries];

    console.log('averages', averages);
    console.log('starting data', startingData);
    startingData.forEach(item => {
      const index = averages.findIndex(e => e.interest === item.interest);

      if (index === -1) {
        averages.push(item);
      }
    });

    setState(
      averages.map(item => {
        return {
          ...item,
          avg: parseInt(item.avg, 10),
        };
      })
    );
  }, [avgSalaries]);

  return (
    <StyledDiv>
      <h3>
        Average Company Salaries in &nbsp;
        {avgSalaries.avgSalaries.length && avgSalaries.avgSalaries[0].currency}
      </h3>
      {!isFetching ? (
        <>
          {avgSalaries.avgSalaries &&
          avgSalaries.avgSalaries.length !== 0 &&
          avgSalaries.avg !== 0 ? (
            <>
              <BarChart
                width={500}
                height={300}
                data={state}
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
  width: 800px;
  height: 500px;
`;
