import React from 'react';
import { Select, AutoComplete } from 'antd';

const { Option } = AutoComplete;

const SelectOptions = ({ placeholder, info }) => {
  return (
    <Select placeholder={placeholder}>
      {info.map(singleInfo => (
        // eslint-disable-next-line react/jsx-one-expression-per-line
        <Option key={singleInfo.id} value={singleInfo.id}>
          {singleInfo.name}{' '}
        </Option>
      ))}
    </Select>
  );
};

export default SelectOptions;
