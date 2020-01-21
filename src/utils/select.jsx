import React from 'react';
import { Select, AutoComplete } from 'antd';
import currencies from './currencies';

const { Option } = Select;

const SelectOptions = ({ placeholder }) => {
  const options = currencies.map(opt => (
    <Option key={opt.code} value={opt.code}>
      {opt.name}
    </Option>
  ));

  return (
    <Select mode="combobox" placeholder={placeholder}>
      {options}
    </Select>
  );
};

export default SelectOptions;
