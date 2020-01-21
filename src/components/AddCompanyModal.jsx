import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as yup from 'yup';
import { Modal, Form, Input, Icon, Button } from 'antd';
import { addCompany } from '../state/actions/companies';
import LocationSearch from './LocationSearch';
import openNotification from '../utils/openNotification';

const AddCompanyModal = props => {
  const {
    visible,
    setAddingCompany,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
  } = props;

  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setAddingCompany(false);
  };
  const handleClose = () => {
    setAddingCompany(false);
  };

  return (
    <Modal
      title="Add A Company"
      visible={visible}
      onCancel={handleClose}
      footer={[
        <Button key="back" onClick={handleClose}>
          Cancel
        </Button>,
      ]}
    >
      <form onSubmit={handleSubmit}>
        <Form.Item
          help={touched.name && errors.name ? errors.name : ''}
          validateStatus={touched.name && errors.name ? 'error' : undefined}
        >
          <Input
            size="large"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Company Name"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </Form.Item>

        <Form.Item
          help={touched.location && errors.location ? errors.location : ''}
          validateStatus={
            touched.location && errors.location ? 'error' : undefined
          }
        >
          <LocationSearch
            name="location"
            value={values.location}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Location"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </Form.Item>
        <Form.Item
          help={touched.website && errors.website ? errors.website : ''}
          validateStatus={
            touched.website && errors.website ? 'error' : undefined
          }
        >
          <Input
            size="large"
            name="website"
            value={values.website}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Website"
            prefix={<Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </Form.Item>
        <Form.Item
          help={touched.type && errors.type ? errors.type : ''}
          validateStatus={touched.type && errors.type ? 'error' : undefined}
        >
          <Input
            size="large"
            name="type"
            value={values.type}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Company Type"
            prefix={
              <Icon type="control" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
          />
        </Form.Item>

        <Form.Item
          help={
            touched.description && errors.description ? errors.description : ''
          }
          validateStatus={
            touched.description && errors.description ? 'error' : undefined
          }
        >
          <Input.TextArea
            size="large"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Description"
            prefix={<Icon type="book" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          loading={!!loading}
          disabled={!!loading}
        >
          Add Company
        </Button>
      </form>
    </Modal>
  );
};

const validationSchema = yup.object().shape({
  name: yup.string().required('Please provide a name'),
  location: yup.string().required('Please provide a location'),
  website: yup
    .string()
    .matches(
      /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/,
      {
        message: 'Enter a valid website',
      }
    )
    .required('Please provide a website'),
  type: yup.string().required('Please provide a company type'),
  description: yup.string().required('Please provide a description'),
});

const CompanyModal = withFormik({
  mapPropsToValues: () => ({
    name: '',
    location: '',
    website: '',
    type: '',
    description: '',
    latitude: '',
    longitude: '',
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.addCompany(values);
    props.setAddingCompany(false);
    openNotification('Company Added Successfully!');
    setSubmitting(false);
  },
  validationSchema: validationSchema,
})(AddCompanyModal);

export default connect(state => state, { addCompany })(CompanyModal);
