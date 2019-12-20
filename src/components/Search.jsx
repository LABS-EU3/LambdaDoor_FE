import React from 'react';
import { Formik } from 'formik';
import { Input } from 'antd';
import styled from 'styled-components';

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
          <Search
            placeholder="Search for Job, Company and Reviews"
            onSearch={value => console.log(value)}
            size="large"
          />
        </StyledForm>
      )}
    </Formik>
  );
};

export default SearchForm;

const StyledForm = styled.form`
  max-width: 700px;
  width: 100%;
`;
