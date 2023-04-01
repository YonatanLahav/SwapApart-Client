import './App.css';
import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import { useState } from 'react';
import PageTemplate from './pages/PageTemplate';
import PrivateRoute from './components/PrivateRoute';

// An example of a user array
const users = [
  {
    id: 1,
    firstName: 'Yonatan',
    lastName: 'Lahav',
    email: 'a@a.a',
    password: '123',
    country: 'Israel',
    region: 'Tel Aviv',
    city: 'Tel aviv',
    rooms: '3',
    bathrooms: '2',
    apartmentImgs: [],
    vacationsArr: []
  },
  {
    id: 2,
    firstName: 'a',
    lastName: 'a',
    email: 'a',
    password: 'a',
    country: 'Israel',
    region: 'Tel-Aviv',
    city: 'Tel aviv',
    rooms: '3',
    bathrooms: '3',
    apartmentImgs: [],
    vacationsArr: []
  }
];

function App() {
  // Define state variables.
  const [data, setData] = useState(users); // set data init state to be users.
  const [user, setUser] = useState(null); // set user state to be null.

  return (
    // Set up routing.
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn data={data} setUser={setUser} />} /> {/* "/" Route to SignIn */}
        <Route path="signin" element={<SignIn data={data} setUser={setUser} />} /> {/* "/signin" Route to SignIn */}
        <Route path="signup" element={<SignUp data={data} setData={setData} setUser={setUser} />} /> {/* "/signup" Route to SignUp */}
        <Route  // "/home" PrivateRoute to SignUp (only to loggedin users). 
          path="home"
          element={
            <PrivateRoute element={<PageTemplate data={data} setData={setData} setUser={setUser} user={user} />
            } user={user} />}
        />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
