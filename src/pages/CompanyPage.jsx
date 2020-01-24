/* eslint-disable no-debugger */
/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Tabs, Button, Icon } from 'antd';
import { useParams } from 'react-router-dom';
import { getCompanies } from '../state/actions/companies';
import CompanyCard from '../components/CompanyCard/CompanyCard';
import { getInterviewReviews } from '../state/actions/singleCompanyReviews';
import InterviewReviews from '../components/CompanyCard/InterviewReviewsCard';

const { TabPane } = Tabs;

const CompanyPage = ({
  getCompanies,
  companies: { companies },
  authState: {
    credentials: { id },
  },
  getInterviewReviews,
  history,
}) => {
  const companyId = useParams().id;
  useEffect(() => {
    const start = async () => {
      await getCompanies();
      getInterviewReviews(companyId);
    };
    start();
  }, []);

  return (
    <div>
      <Button
        style={{
          marginBottom: '30px',
          border: '1px solid #BB1333',
          color: '#BB1333',
        }}
        onClick={() => history.goBack()}
      >
        <Icon type="left" />
        Back
      </Button>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Company Info" key="1">
          <CompanyCard companies={companies} />
        </TabPane>
        <TabPane tab="Company Reviews" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Salary Reviews" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Interview Process Reviews" key="4">
          <InterviewReviews companyId={companyId} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default connect(state => state, { getCompanies, getInterviewReviews })(
  CompanyPage
);
