// import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

import Sidebar from './components/Navigation/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App bg-app min-h-screen flex">
      <Sidebar></Sidebar>
      <div className='router-container mt-5'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
