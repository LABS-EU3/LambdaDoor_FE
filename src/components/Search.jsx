import React from 'react';
import { Formik } from 'formik';
import { Input } from 'antd';
import styled from 'styled-components';
import { mobileLandscape, mobilePortrait } from '../styles/theme.styles';
import Logo from './Logo';

const { Search } = Input;

const SearchForm = () => {
  return (
    <Formik
      initialValues={{ search: '' }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        resetForm({});
        setSubmitting(true);

        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 1000);
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values }) => (
        <StyledForm onSubmit={handleSubmit}>
          <div className="search-field">
            <Search
              placeholder="Search for Job, Company and Reviews"
              onSearch={value => console.log(value)}
              size="large"
            />
          </div>
        </StyledForm>
      )}
    </Formik>
  );
};

export default SearchForm;

const StyledForm = styled.form`
  max-width: 700px;
  width: 100%;
  @media ${mobilePortrait} {
    display: flex;
    justify-content: space-between;
    background-color: grey;
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
      width: 300px;
      padding-top: 9px;
      margin-right: 6px;
    }
  }
`;
