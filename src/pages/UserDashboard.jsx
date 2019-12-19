import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actions } from '../state/actions';


const UserDashboard = (props) => {

    return (
        <h1>Hello</h1>
    )
}


export default connect( state => state, actions)(UserDashboard)
