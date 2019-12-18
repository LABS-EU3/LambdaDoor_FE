import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actions } from '../state/actions';


const UserDashboard = (props) => {
  const {
    companyReviews,
    getCompanyReviews
  } = props;

  useEffect(() => {
      getCompanyReviews();
  }, []);

    return (
        <h1>{companyReviews.message}</h1>
    )
}


export default connect( state => state, actions)(UserDashboard)
