import { createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardLayout from './components/layout/DashboardLayout';
import Books from './pages/BooksPage';
import BooksPage from './pages/BooksPage';
import AuthLayout from './components/layout/AuthLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      // {
      //   index: true,  // default page
      //   element: <HomePage />,
      // },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "books",
        element: <BooksPage/>,
      }
    ]
  },

  {
    path:"/auth",
    element:<AuthLayout/>,
    children:[
      {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />
  }
    ]
  }
  
]);

export default router;
