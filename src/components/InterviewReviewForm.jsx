/* eslint-disable no-shadow */
/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AutoCompleteComponent from '../utils/autocomplete';
import { addInterviewReview } from '../state/actions/reviews';
import openNotification from '../utils/openNotification';

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

export default withRouter(
  connect(state => state, { addInterviewReview })(InterviewReviewForm)
);
