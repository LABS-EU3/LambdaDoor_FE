import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import UserDashboard from '../../pages/UserDashboard';
import DashboardLayout from '../Layout/DashboardLayout';

const AppRouter = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <DashboardLayout path="/dashboard" component={UserDashboard} />
          </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;
