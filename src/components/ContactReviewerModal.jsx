import React from 'react';
import ReactDOM from 'react-dom';
import { withFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { Modal, Form, Input, Icon, Button, Select } from 'antd';
import openNotification from '../utils/openNotification';

function ContactReviewer({
  open,
  setOpen,
  visible,
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors,
}) {
  return (
    <Modal
      title="Basic Modal"
      visible={open}
      onCancel={() => setOpen(false)}
      footer={[<Button>cancel</Button>]}
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
            placeholder="Your Name"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </Form.Item>
        <Form.Item
          help={touched.email && errors.email ? errors.email : ''}
          validateStatus={touched.email && errors.email ? 'error' : undefined}
        >
          <Input
            size="large"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your Email Address"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
          <Input
            size="large"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your Message Here"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </Form.Item>
        <Button htmlType="submit" type="secondary">
          Send Message
        </Button>
      </form>
    </Modal>
  );
}

const validationSchema = yup.object().shape({
  name: yup.string().required('Please provide your name'),
  email: yup
    .string()
    .email('Please provide a vaild email address')
    .required('Please provide your email address'),
  description: yup.string().required('Please ask your question'),
});

const ContactReviewerModal = withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    description: '',
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    // props.addCompany(values);
    // props.setAddingCompany(false);
    console.log(values);
    openNotification('Message Sent Successfully!');
    setSubmitting(false);
  },
  validationSchema: validationSchema,
})(ContactReviewer);
export default ContactReviewerModal;
