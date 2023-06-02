import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PageTemplate from './pages/PageTemplate';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';

/**
 * The main component representing the application.
 */
function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          {/* Route for the sign-in page */}
          <Route path="/" element={<SignIn />} />

          {/* Route for the sign-up page */}
          <Route path="/signin" element={<SignIn />} />

          {/* Route for the sign-up page */}
          <Route path="/signup" element={<SignUp />} />

          {/* Private route for the authenticated user's home page */}
          <Route
            path="/home"
            element={<PrivateRoute element={<PageTemplate />} />}
          />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
