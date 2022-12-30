import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../../context/Global.context';

const ProtectedRoute = ({ children }) => {
    const state = useContext(GlobalContext);

    if (!state.isLoggedIn) {
      console.log('LOGIN REDIRECT');
      return <Navigate to="/login" replace />;
    }
  
    return children;
};
  
export default ProtectedRoute;