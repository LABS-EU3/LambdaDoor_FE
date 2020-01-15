import React from 'react';
import { Formik } from 'formik';
import { Input, AutoComplete, Rate, Switch } from 'antd';
import { companies } from '../utils/data';

const { TextArea } = Input;
const { Option, OptGroup } = AutoComplete;

const CompanyReview = () => {
  const datasource = companies;

  const options = datasource
    .map(group => (
      <OptGroup key={group.id} label={group.name}>
        {console.log(group)}
        {group.children.map(opt => (
          <Option key={opt.name} value={opt.name}>
            {opt.name}
          </Option>
        ))}
      </OptGroup>
    ))
    .concat([
      <Option disabled key="all" className="show-all">
        View all results
      </Option>,
    ]);
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
          // dataSource={options}
          placeholder="input here"
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
