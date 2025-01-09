import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginUser, registerUser, logout } from '../store/slices/authSlice';
import { toast } from 'react-hot-toast';

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, loading, error, isAuthenticated } = useSelector((state) => state.auth);

  const login = async (credentials) => {
    try {
      await dispatch(loginUser(credentials)).unwrap();
      const from = location.state?.from?.pathname || '/';
      navigate(from);
      toast.success('Welcome back!');
    } catch (error) {
      toast.error(error.message || 'Failed to login');
    }
  };

  const register = async (userData) => {
    try {
      await dispatch(registerUser(userData)).unwrap();
      navigate('/');
      toast.success('Registration successful!');
    } catch (error) {
      toast.error(error.message || 'Failed to register');
    }
  };

  const signOut = () => {
    dispatch(logout());
    navigate('/login');
    toast.success('Logged out successfully');
  };

  return {
    user,
    loading,
    error,
    isAuthenticated,
    login,
    register,
    logout: signOut
  };
};

export default useAuth;

