/* eslint-disable no-debugger */
/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import { getCompanies } from '../state/actions/companies';
import CompanyCard from '../components/CompanyCard/CompanyCard';

const { TabPane } = Tabs;

const CompanyPage = ({
  getCompanies,
  companies: { companies },
  authState: {
    credentials: { id },
  },
}) => {
  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <div>
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
          Content of Tab Pane 4
        </TabPane>
      </Tabs>
    </div>
  );
};

export default connect(state => state, { getCompanies })(CompanyPage);
