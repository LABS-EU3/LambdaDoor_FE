import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import styled from 'styled-components';
import CompanyReviewForm from '../components/CompanyReviewForm';
import SalaryReviewForm from '../components/SalaryReviewForm';

const { TabPane } = Tabs;
const AddReview = ({ history }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/');
    }
  }, []);
  return (
    <StyledContainer>
      <div>
        <Tabs>
          <TabPane tab="Company Review" key="1">
            <CompanyReviewForm />
          </TabPane>
          <TabPane tab="Salary Review" key="2">
            <SalaryReviewForm />
          </TabPane>
          <TabPane tab="Interview Process" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
      </div>
    </StyledContainer>
  );
};
export default AddReview;

const StyledContainer = styled.div`
  width: 90%;
  margin: 0 5%;
`;
