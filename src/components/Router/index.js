import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layout/DashboardLayout';
import UserDashboard from '../../pages/UserDashboard';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <DashboardLayout exact path="/" component={UserDashboard} />
        </BrowserRouter>
    )
}

export default AppRouter;
