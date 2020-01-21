/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Input, Rate, Switch, Form, Button, Icon } from 'antd';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { addCompanyReview } from '../state/actions/reviews';
import { mobilePortrait } from '../styles/theme.styles';

import AutoComplete from '../utils/autocomplete';
import openNotification from '../utils/openNotification';

const { TextArea } = Input;

const CompanyReview = ({
  addCompanyReview,
  companies: { companies },
  authState: {
    credentials: { id },
  },
  history,
}) => {
  const [formValues, setFormValues] = useState({
    company_id: '',
    ratings: 0,
    is_currently_employed: false,
    review_headline: '',
    review: '',
    is_accepting_questions: false,
  });

  const handleChange = event => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleCompanyName = name => {
    const company = companies.find(element => {
      return element.name === name;
    });
    if (company) {
      setFormValues({
        ...formValues,
        company_id: company.id,
        location: company.location,
      });
    }
  };

  const handleComponentChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { location, ...rest } = formValues;

    addCompanyReview({ ...rest, user_id: id }, id);
    history.push('/reviews');
    openNotification('Review Added Successfully! ');
  };

  return (
    <StyledContainer>
      <Form layout="vertical">
        <AutoComplete
          label="Company Name"
          onChange={e => handleCompanyName(e)}
          dataSource={companies}
        />

        <Form.Item label="Overall Rating">
          <Rate
            defaultValue={0}
            name="ratings"
            onChange={value => handleComponentChange('ratings', value)}
          />
        </Form.Item>
        <Form.Item>
          <EmployeeInfo>
            <div>
              <p>I am a current employee</p>
              <Switch
                checkedChildren={<Icon type="check" />}
                unCheckedChildren={<Icon type="close" />}
                name="is_currently_employed"
                onChange={value =>
                  handleComponentChange('is_currently_employed', value)
                }
              />
            </div>
            <div>
              <p>I accept more questions</p>
              <Switch
                checkedChildren={<Icon type="check" />}
                unCheckedChildren={<Icon type="close" />}
                name="is_accepting_questions"
                onChange={value =>
                  handleComponentChange('is_accepting_questions', value)
                }
              />
            </div>
          </EmployeeInfo>
        </Form.Item>
        <Form.Item label="Review Headline">
          <Input name="review_headline" onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Review">
          <TextArea
            rows={10}
            placeholder="Please share some of the pros and cons of working at this company"
            name="review"
            onChange={handleChange}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </StyledContainer>
  );
};

export default withRouter(
  connect(state => state, { addCompanyReview })(CompanyReview)
);

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
