import React from 'react';
import { Formik } from 'formik';
import { Input, AutoComplete } from 'antd';

const SalaryReview = () => {
  return (
    <div>
      <div>
        <p>Company Name</p>
        <AutoComplete />
      </div>
    </div>
  );
};

export default SalaryReview;
