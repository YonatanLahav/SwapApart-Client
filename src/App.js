import './App.css';
import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import { useState } from 'react';
import PageTemplate from './pages/PageTemplate';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';

// An example of a user array
const users = [
  {
    id: 1,
    firstName: 'Yonatan',
    lastName: 'Lahav',
    email: 'b',
    password: 'b',
    country: 'Israel',
    region: 'Tel Aviv',
    city: 'Tel aviv',
    rooms: '3',
    bathrooms: '2',
    apartmentImgs: [],
    vacationsArr: [
      {
        startDate: '01-04-2023',
        endDate: '11-04-2023',
        country: 'Israel',
        region: 'HaMerkaz',
        city: 'Tel-Aviv',
        rooms: '3',
        bathrooms: '2',
        seenVacations: []
      }]
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
      <UserProvider>
        <Routes>
          <Route path="/" element={<SignIn />} /> {/* "/" Route to SignIn */}
          <Route path="signin" element={<SignIn />} /> {/* "/signin" Route to SignIn */}
          <Route path="signup" element={<SignUp data={data} setData={setData} setUser={setUser} />} /> {/* "/signup" Route to SignUp */}
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
