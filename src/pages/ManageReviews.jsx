/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import CompanyReviewList from '../components/MyReviews/CompanyReviews/CompanyReviewList';
import InterviewReviewList from '../components/MyReviews/InterviewReviews/InterviewReviewList';

const { TabPane } = Tabs;

const ManageReviews = ({ history }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/');
    }
  }, []);
  return (
    <div>
      <h1>My Reviews</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Company Reviews" key="1">
          <CompanyReviewList />
        </TabPane>
        <TabPane tab="Interview Reviews" key="2">
          <InterviewReviewList />
        </TabPane>
        <TabPane tab="Salary Reviews" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ManageReviews;
