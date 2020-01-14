import React from 'react';
import { Formik } from 'formik';
import { Input, AutoComplete, Rate, Switch } from 'antd';
import { companies } from '../utils/data';

const CompanyReview = () => {
  return (
    <div>
      <div>
        <p>Company Name</p>
        <AutoComplete datasource={companies} />
      </div>
      <div>
        <p>Overall Rating</p>
        <Rate defaultValue={0} />
      </div>
      <div>
        I am a current employee
        <Switch />
      </div>
      <div>
        <p>Review Headline</p>
        <Input />
      </div>
      <div>
        <p>Review</p>
        <Input /> 
      </div>
    </div>
  );
};

export default CompanyReview;
