// import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

import { useContext } from 'react';
import { GlobalContext } from './context/Global.context';

import Sidebar from './components/Navigation/Sidebar';

import './App.css';

function App() {
  const { state } = useContext(GlobalContext);
  
  return (
    <div className="app-container w-full bg-app min-h-screen flex">
      {
         state.isLoggedIn && <Sidebar></Sidebar>
      }
      <div className='router-container w-full'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
