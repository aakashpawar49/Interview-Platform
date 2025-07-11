import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'

import Navbar from './Navbar';
import Footer from './Footer';



const DashboardLayout = ({ children }) => {
  const {user} = useContext(UserContext);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {user && <div className="flex-grow">{children}</div>}

      <Footer />
    </div>
  );
};

export default DashboardLayout;