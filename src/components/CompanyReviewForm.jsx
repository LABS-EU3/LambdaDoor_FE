import React, { useState } from 'react';
import { Formik } from 'formik';
import { Input, Rate, Switch, Form, Button, Icon } from 'antd';
import styled from 'styled-components';
import { mobilePortrait } from '../styles/theme.styles';
import { companies } from '../utils/data';
import Select from '../utils/select';

const { TextArea } = Input;

const CompanyReview = () => {
  return (
    <StyledContainer>
      <Form layout="vertical">
        <Form.Item label="Company Name">
          <Select placeholder="Name" info={companies} />
        </Form.Item>
        <Form.Item label="Location">
          <Input />
        </Form.Item>
        <Form.Item label="Overall Rating">
          <Rate defaultValue={0} />
        </Form.Item>
        <Form.Item>
          <EmployeeInfo>
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
          </EmployeeInfo>
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
  margin: 5% 0%;
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

const EmployeeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    width: 50%;
    p {
      display: inline;
      margin-right: 10%;
    }
  }
  @media ${mobilePortrait} {
    flex-direction: column;
    div {
      margin-bottom: 5%;
      width: 100%;
    }
  }
`;
