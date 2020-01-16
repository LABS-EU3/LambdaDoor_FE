import React, { useState } from 'react';
import { Formik } from 'formik';
import {
  mobileLandscape,
  mobilePortrait,
  tabletLandscape,
  tabletPortrait,
} from '../styles/theme.styles';
import { Input, AutoComplete, Rate, Switch, Form, Button, Icon } from 'antd';
import styled from 'styled-components';
import { companies } from '../utils/data';

const { TextArea } = Input;
const { Option } = AutoComplete;

function renderOption(Item) {
  return (
    <Option key={Item.name} text={Item.name}>
      <p>{Item.name}</p>
    </Option>
  );
}

const CompanyReview = () => {
  return (
    <StyledContainer>
      <Form layout="vertical">
        <Form.Item label="Company Name">
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
        </Form.Item>

        <Form.Item label="Location">
          <Input />
        </Form.Item>
        <Form.Item label="Overall Rating">
          <Rate defaultValue={0} />
        </Form.Item>
        <Form.Item>
          <Employee>
            <div>
              <p>I am a current employee</p>
              <Switch
                checkedChildren={<Icon type="check" />}
                unCheckedChildren={<Icon type="close" />}
                defaultChecked
              />
            </div>
            <div>
              <p>I accept more questions</p>
              <Switch
                checkedChildren={<Icon type="check" />}
                unCheckedChildren={<Icon type="close" />}
                defaultChecked
              />
            </div>
          </Employee>
        </Form.Item>
        <Form.Item label="Review Headline">
          <Input />
        </Form.Item>
        <Form.Item label="Review">
          <TextArea
            rows={10}
            placeholder="Please share some of the pros and cons of working at this company"
          />
        </Form.Item>

        <Button type="default" htmlType="submit">
          Submit
        </Button>
      </Form>
    </StyledContainer>
  );
};

export default CompanyReview;
const StyledContainer = styled.div`
  width: 100%;
  margin:5% 0%;
  .ant-btn:hover,
  .ant-btn:focus,
  .ant-btn:active,
  .ant-btn.active {
    background: #bb1333;
    color: #fff;
  }
  @media (min-width: 1024px) {
    width: 60%;
  }
`;

const Employee = styled.div`
  display: flex;
  div {
    width: 50%;
    p {
      display: inline;
      margin-right: 10%;
    }
  }
`;
