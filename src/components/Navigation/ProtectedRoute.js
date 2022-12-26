import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';

const ProtectedRoute = ({ children }) => {
    const state = useContext(AuthContext);

    if (!state.isLoggedIn) {
      console.log('ENTER FIRST');
      return <Navigate to="/login" replace />;
    }
  
    return children;
};
  
export default ProtectedRoute;