import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Register from "./pages/Register"
import Dashboard from './pages/Dashboard'
import AuthGuard from './auth/AuthGaurd'

const DefaultRoute = () => {
  const authData = JSON.parse(localStorage.getItem("loginData"));

  if (authData) {
    return <Navigate to="/Dashboard" replace />
  }
  return <Navigate to="/Login" replace />
}

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <DefaultRoute />
    },
    {
      path: "/Login",
      element: (
        <AuthGuard required={false}>
          <Login />
        </AuthGuard>
      )
    },
    {
      path: "/Register",
      element: <Register />
    },
    {
      path: "/Dashboard",
      element: (
        <AuthGuard required={true}>
          <Dashboard />
        </AuthGuard>
      )
    },
  ]);

  return <RouterProvider router={route} />;
}

export default App;
