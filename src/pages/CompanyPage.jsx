/* eslint-disable no-debugger */
/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Tabs } from 'antd';
import { getCompanies } from '../state/actions/companies';
import { getInterviewReviewsByCompanyId } from '../state/actions/reviews';
import CompanyCard from '../components/CompanyCard/CompanyCard';
import CompanyReviewCard from '../components/CompanyReview/CompanyReviewCard';
import InterviewReviewList from '../components/CompanyReviews/InterviewReviews/InterviewReviewList';

const { TabPane } = Tabs;
const CompanyPage = ({
  getCompanies,
  getInterviewReviewsByCompanyId,
  companies: { companies },
  // avgSalaries: { avgSalaries },
  authState: {
    credentials: { id },
  },
}) => {
  const companyId = useParams().id;

  useEffect(() => {
    getCompanies();
    getInterviewReviewsByCompanyId(companyId);
  }, []);

  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Company Info" key="1">
          <CompanyCard companies={companies} />
          {/* <CompanySalaryChart avgSalaries={avgSalaries} /> */}
        </TabPane>
        <TabPane tab="Company Reviews" key="2">
          <CompanyReviewCard />
        </TabPane>
        <TabPane tab="Salary Reviews" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Interview Process Reviews" key="4">
          <InterviewReviewList />
        </TabPane>
      </Tabs>
    </div>
  );
};
export default connect(state => state, {
  getCompanies,
  getInterviewReviewsByCompanyId,
})(CompanyPage);
