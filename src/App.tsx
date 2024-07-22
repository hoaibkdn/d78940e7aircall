/** @format */

import React, { useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import { Recent, ActivityDetail, ListActivities, Comming } from './pages';

import { BottomNavigation } from './components';
import useNavigateParams from './hooks/useNavigateParam';

const paths: Record<number, string> = {
  0: '/',
  1: '/contact',
  2: '/setting',
  3: '/list',
};

const Root = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigateParams();
  const onChangeTab = (tab: number) => {
    setActiveTab(tab);
    const path = paths[tab] || '/';
    navigate(path);
  };
  return (
    <div className='container'>
      <Outlet />
      <BottomNavigation activeTab={activeTab} onChangeTab={onChangeTab} />
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '',
          element: <Recent />,
          children: [
            {
              path: '',
              element: <ListActivities />,
            },
            {
              path: 'recent/archive',
              element: <ListActivities type='ARCHIVED' />,
            },
            {
              path: 'recent/activity-detail',
              element: <ActivityDetail from='1212' to='13123' />,
            },
            {
              path: '/contact',
              element: <Comming text='Contact comming soon' />,
            },
            {
              path: '/setting',
              element: <Comming text='Setting comming soon' />,
            },
            {
              path: '/list',
              element: <Comming text='No idea' />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
