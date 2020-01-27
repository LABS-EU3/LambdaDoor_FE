/* eslint-disable no-shadow */
/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Icon, Switch } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AutoCompleteComponent from '../utils/autocomplete';
import { addInterviewReview } from '../state/actions/reviews';
import openNotification from '../utils/openNotification';
import { mobilePortrait } from '../styles/theme.styles';

const InterviewReviewForm = ({
  companies: { companies },
  authState: {
    credentials: { id },
  },
  addInterviewReview,
  history,
}) => {
  const [formValues, setFormValues] = useState({
    company_id: '',
    text: '',
    is_accepting_questions: false,
    is_currently_employed: false,
  });

  const handleCompanyName = name => {
    const company = companies.find(element => {
      return element.name === name;
    });
    if (company) {
      setFormValues({
        ...formValues,
        company_id: company.id,
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

    addInterviewReview(formValues, id);
    history.push('/reviews');
    openNotification('Review Added Successfully! ');
  };

  return (
    <StyledContainer>
      <Form layout="vertical">
        <div>
          <AutoCompleteComponent
            label="Company Name"
            placeholder="Company name"
            dataSource={companies}
            onChange={e => handleCompanyName(e)}
          />
        </div>

        <Form.Item label="Review">
          <Input.TextArea
            rows={10}
            name="text"
            placeholder="Please share the steps involved in the interview process"
            onChange={e =>
              setFormValues({ ...formValues, text: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item>
          <EmployeeInfo>
            <div>
              <p>I am a current employee</p>
              <Switch
                checkedChildren={<Icon type="check" />}
                unCheckedChildren={<Icon type="close" />}
                name="is_current_employee"
                onChange={value =>
                  handleComponentChange('is_current_employee', value)
                }
              />
            </div>
            <div>
              <p>I am accepting more questions</p>
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

        <Button
          type="primary"
          htmlType="submit"
          onClick={handleSubmit}
          disabled={Boolean(
            Object.keys(formValues).filter(elem => formValues[elem] === '')
              .length
          )}
        >
          Submit
        </Button>
      </Form>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
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

export default withRouter(
  connect(state => state, { addInterviewReview })(InterviewReviewForm)
);
