import React from 'react';
import { Formik } from 'formik';

const SearchForm = () => {
  return (
    <Formik
      initialValues={{search: ''}}
      onSubmit={(values, {setSubmitting, resetForm}) => {
          resetForm({});
          setSubmitting(true);

          setTimeout(() => {
              setSubmitting(false);
              alert(JSON.stringify(values, null, 2));
          }, 1000);
      }}
  >
      {({handleSubmit, handleChange, handleBlur, values, isSubmitting}) => (
          <Form onSubmit={handleSubmit}>
              <Form.Item label="Search">
                  <Input
                      type="text"
                      onChange={handleChange}
                      value={values.search}
                      name="search"
                      placeholder="Search information by companies, job roles..."
                  />
              </Form.Item>
              <Button
                  type="primary"
                  htmlType="submit"
                  loading={isSubmitting}
              >
                  Search
              </Button>
          </Form>
      )}
  </Formik>
  )
};

export default SearchForm;
