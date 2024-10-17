import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar'
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Login from "./components/Login/Login";
import Home from './components/Home/Home'
// import Footer from './components/Footer/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    console.log("inside handleAuth fn")
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    console.log("inside handleLogout fn")
    setIsAuthenticated(false);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
      // <ProtectedRoute>
        <Home isAuthenticated={isAuthenticated} handleAuthentication={handleAuthentication}/>
      // </ProtectedRoute>
      ),
      errorElement: <div>Oops, not found</div>
    },
    {
      path: "/login",
      element: <Login isAuthenticated={isAuthenticated} handleAuthentication={handleAuthentication}/>,
      errorElement: <div>Error loading the login page!</div>
    }
  ])

  return (
    <div className="App">
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>
      <RouterProvider router={router} />
        {/* <ProtectedRoute /> */}
      {/* </RouterProvider> */}
    </div>
  );
}

export default App;