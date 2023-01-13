import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'


const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  console.log('[Protected Route Component]',isLoggedIn)


    if (!isLoggedIn) {
      console.log('LOGIN REDIRECT');
      return <Navigate to="/login" replace />;
    }
  
    return children;
};
  
export default ProtectedRoute;