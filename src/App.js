// import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

import { useSelector, useDispatch } from 'react-redux'

import Sidebar from './components/Navigation/Sidebar';

import './App.css';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  return (
    <div className="app-container w-full bg-app min-h-screen flex">
      {
         isLoggedIn && <Sidebar></Sidebar>
      }
      <div className='router-container w-full'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
