/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Form, Input, AutoComplete } from 'antd';

const { Option } = AutoComplete;

const renderOption = Item => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Option key={Item.name} text={Item.name}>
      <p>{Item.name}</p>
    </Option>
  );
}

const AutoCompleted = ({ label, dataSource, placeholder }) => {
  return (
    <Form.Item label={label}>
      <AutoComplete
        className="certain-category-search"
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={false}
        dropdownStyle={{ width: 300 }}
        size="large"
        style={{ width: '100%' }}
        dataSource={dataSource.map(renderOption)}
        optionLabelProp="value"
        filterOption
      >
        <Input placeholder={placeholder} />
      </AutoComplete>
    </Form.Item>
  );
};

export default AutoCompleted;
