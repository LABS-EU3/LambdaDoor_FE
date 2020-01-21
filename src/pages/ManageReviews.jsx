/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import MyReviewList from '../components/MyReviews/MyReviewList';
import { getCompanyReviews } from '../state/actions/reviews';

const { TabPane } = Tabs;

const ManageReviews = ({
  authState: {
    credentials: { id },
  },
  getCompanyReviews,
}) => {
  return (
    <div>
      <h1>My Reviews</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Company Reviews" key="1">
          <MyReviewList />
        </TabPane>
        <TabPane tab="Interview Reviews" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Salary Reviews" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default connect(state => state, { getCompanyReviews })(ManageReviews);
