// import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux'

import Sidebar from './components/Navigation/Sidebar';
import SidebarOpenButton from './components/Navigation/SidebarOpenButton';

import './App.css';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  function sidebarToggle() {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  return (
    <div className="app-container relative w-full bg-app min-h-screen flex">
      <Sidebar collapsed={isSidebarCollapsed} handleSidebar={() => sidebarToggle()}></Sidebar>
      <SidebarOpenButton collapsed={isSidebarCollapsed} handleSidebar={() => sidebarToggle()}></SidebarOpenButton>
      <div className={`router-container w-full mt-10 transition-all duration-300 ${isSidebarCollapsed ? 'px-20' : 'px-10'}`}>
         <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
