import React, { useState } from 'react';
import { Formik } from 'formik';
import { Input, Switch, Form, Button, Icon, Rate } from 'antd';
import styled from 'styled-components';
import { mobilePortrait } from '../styles/theme.styles';
import { companies, currencies, jobCategories } from '../utils/data';
import Select from '../utils/select';

const { TextArea } = Input;
const SalaryReview = () => {
  return (
    <StyledContainer>
      <Form layout="vertical">
        <Form.Item label="Company Name">
          <Select placeholder="Name" info={companies} />
        </Form.Item>
        {
          <div>
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
          </div>
        }
        <Form.Item label="Job Title">
          <Input />
        </Form.Item>
        <Form.Item label="Job Category">
          <Select placeholder="Category" info={jobCategories} />
        </Form.Item>
        <Form.Item label="Job Description">
          <TextArea
            rows={5}
            placeholder="Please share with us what the job role involves"
          />
        </Form.Item>

        <Form.Item label="Salary">
          <EmployeeInfo>
            <div>
              <Input placeholder="Amount" />
            </div>
            <div>
              <Select placeholder="Currency" info={currencies} />
            </div>
          </EmployeeInfo>
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
              <p>I want to be anonymous</p>
              <Switch
                checkedChildren={<Icon type="check" />}
                unCheckedChildren={<Icon type="close" />}
                defaultChecked={false}
              />
            </div>
          </EmployeeInfo>
        </Form.Item>

        <Button type="default" htmlType="submit">
          Submit
        </Button>
      </Form>
    </StyledContainer>
  );
};

export default SalaryReview;
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
  width: 100%;
  justify-content: space-between;
  div {
    width: 50%;
    .ant-select-selection--single {
      width: 95%;
      margin-left: 5%;
    }
    .ant-select-selection__rendered {
      width: 100%;
    }
    p {
      display: inline;
      margin-right: 10%;
    }
  }
  @media ${mobilePortrait} {
    flex-direction: column;
    div {
      width: 100%;
      margin-bottom: 5%;
      justify-content: center;
      .ant-select-selection--single {
        width: 100%;
        margin-left: 0%;
      }
    }
  }
`;
