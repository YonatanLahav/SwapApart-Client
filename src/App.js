import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import { useState } from 'react';
import PageTemplate from './pages/PageTemplate';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';

function App() {
  // Define state variables.
  const [data, setData] = useState(null); // set data init state to be users.
  const [user, setUser] = useState(null); // set user state to be null.

  return (
    // Set up routing.
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<SignIn />} /> {/* "/" Route to SignIn */}
          <Route path="signin" element={<SignIn />} /> {/* "/signin" Route to SignIn */}
          <Route path="signup" element={<SignUp />} /> {/* "/signup" Route to SignUp */}
          <Route  // "/home" PrivateRoute to SignUp (only to loggedin users). 
            path="home"
            element={
              <PrivateRoute
                element={
                  <PageTemplate data={data} setData={setData} setUser={setUser} user={user} />
                } />}
          />
        </Routes>
      </UserProvider>
    </BrowserRouter >
  );
}

export default App;
