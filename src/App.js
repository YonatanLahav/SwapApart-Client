import './App.css';
import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import { useState } from 'react';
import Home from './pages/PageTemplate';
import PrivateRoute from './components/PrivateRoute';

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
    apartmentImgs: []
  },
  {
    id: 2,
    firstName: 'a',
    lastName: 'a',
    email: 'a',
    password: 'a',
    country: 'Israel',
    region: 'Tel Aviv',
    city: 'Tel aviv',
    rooms: '3',
    bathrooms: '3',
    apartmentImgs: []
  }
];

function App() {

  const [data, setData] = useState(users);
  const [user, setUser] = useState(null); // add user state

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn data={data} setUser={setUser} />} />
        <Route path="signin" element={<SignIn data={data} setUser={setUser} />} />
        <Route path="signup" element={<SignUp data={data} setData={setData} setUser={setUser} />} />
        <Route
          path="home"
          element={<PrivateRoute element={<Home data={data} setData={setData} setUser={setUser} />} user={user} />}
        />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
