import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layout/DashboardLayout';
import UserDashboard from '../../pages/UserDashboard';

const AppRouter = () => {
<<<<<<< HEAD:src/components/Router/index.js
    return (
        <BrowserRouter>
            <DashboardLayout exact path="/" component={UserDashboard} />
        </BrowserRouter>
    )
}
=======
  return (
    <BrowserRouter>
      <DashboardLayout exact path="/" component={Home} />
    </BrowserRouter>
  );
};
>>>>>>> develop:src/components/Router/index.jsx

export default AppRouter;
