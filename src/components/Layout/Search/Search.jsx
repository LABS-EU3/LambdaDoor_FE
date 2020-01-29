/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Input, Select, Form, Button } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { mobilePortrait } from '../../../styles/theme.styles';
import getSearchResults from '../../../state/actions/search';

const { Option } = Select;

const SearchForm = ({ getSearchResults, history }) => {
  const [formValues, setFormValues] = useState({
    search_category: 'companies',
    search_query: '',
  });

  const handleChange = event => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleComponentChange = name => {
    setFormValues({
      ...formValues,
      search_category: name,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    getSearchResults(formValues);
    history.push('/search-results');
  };

  return (
    <StyledFormContainer>
      <Form>
        <div className="search-category">
          <Select
            name="search_category"
            defaultValue="companies"
            onChange={handleComponentChange}
            size="large"
          >
            <Option value="companies">Companies</Option>
            <Option value="salaries">Salaries</Option>
            <Option value="interviews">Interviews</Option>
          </Select>
        </div>
        <div className="search-field">
          <Input
            placeholder={
              formValues.search_category === 'companies'
                ? 'Company Name, Location'
                : formValues.search_category === 'salaries'
                ? 'Job Title, Location'
                : 'Company Name, Job Title'
            }
            size="large"
            name="search_query"
            onChange={handleChange}
          />
        </div>
        <Button onClick={handleSubmit} size="large">
          Search
        </Button>
      </Form>
    </StyledFormContainer>
  );
};

export default withRouter(
  connect(state => state, { getSearchResults })(SearchForm)
);

const StyledFormContainer = styled.div`
  .ant-form {
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .ant-btn {
    margin-left: 1rem;
  }
  .ant-input {
    width: 500px;
    background-color: #ffffff !important;
  }

  @media ${mobilePortrait} {
    display: flex;
    justify-content: space-between;
    background-color: grey;
  }
  .search-category {
    min-width: 150px;
    margin-right: 1rem;
  }
  .mobile-logo-btn {
    display: none;
    @media ${mobilePortrait} {
      display: inherit;
      width: 50px;
      padding: 12px;
      img {
        width: 1.88rem;
      }
    }
  }

  @media ${mobilePortrait} {
    background-color: #fafafa;
  }

  .search-field {
    @media ${mobilePortrait} {
      width: 90%;
      padding-top: 9px;
      margin-right: 6px;
    }
  }
`;
