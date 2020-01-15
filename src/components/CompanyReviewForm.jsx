import React, { useState } from 'react';
import { Formik } from 'formik';
import { Input, AutoComplete, Rate, Switch } from 'antd';
import { companies } from '../utils/data';

const { TextArea } = Input;
const { Option } = AutoComplete;

function renderOption(item) {
  return (
    <Option key={item.name} text={item.name}>
      <p>{item.name}</p>
    </Option>
  );
}

const CompanyReview = () => {
  return (
    <div>
      <div>
        <p>Company Name</p>
        <AutoComplete
          className="certain-category-search"
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={false}
          dropdownStyle={{ width: 300 }}
          size="large"
          style={{ width: '100%' }}
          dataSource={companies.map(renderOption)}
          optionLabelProp="value"
        >
          <Input />
        </AutoComplete>
      </div>
      <div>
        <p>Location</p>
        <Input />
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
        <TextArea />
      </div>
    </div>
  );
};

export default CompanyReview;
