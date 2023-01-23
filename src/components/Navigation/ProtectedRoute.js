import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'


const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  console.log('[Protected Route Component]',isLoggedIn)
  console.log(children.type.name)


    if (!isLoggedIn) {
      console.log('LOGIN REDIRECT');
      return <Navigate to="/login" replace />;
    }else {
      return children;
    }
  
};
  
export default ProtectedRoute;