/** @format */
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './../../components';
import './recent.css';

const Recent: FC<any> = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Recent;
