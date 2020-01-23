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

const CompanySalaryChart = ({ getAvgSalaries, avgSalaries }) => {
  const { id } = useParams();
  console.log(avgSalaries);
  useEffect(() => {
    getAvgSalaries(id);
  }, []);
  console.log('avg salaries', avgSalaries.avgSalaries);

  return (
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
      <XAxis dataKey="interest" />
      <YAxis dataKey="avg" />
      <Tooltip />
      <Legend verticalAlign="left" name="boo" />
      <Bar dataKey="avg" barSize={100}>
        {avgSalaries.avgSalaries &&
          avgSalaries.avgSalaries.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLOURS[index]} />
          ))}
      </Bar>
    </BarChart>
  );
};

export default connect(state => state, { getAvgSalaries })(CompanySalaryChart);
