import React from 'react';
import { Select, AutoComplete } from 'antd';
import currencies from './currencies';

const { Option } = Select;

const SelectOptions = ({ placeholder, arr, onChange }) => {
  const options = arr.map(opt => (
    <Option key={opt.id} value={opt.id}>
      {opt.name}
    </Option>
  ));

  return (
    <Select
      onChange={e => {
        onChange('interest_id', e);
      }}
      placeholder={placeholder}
    >
      {options}
    </Select>
  );
};

export default SelectOptions;
