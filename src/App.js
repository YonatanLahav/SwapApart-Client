import './App.css';
import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import { useEffect, useState } from 'react';
import Home from './pages/Home';

const users = [
  {
    id: 1,
    firstName: 'Yonatan',
    lastName: 'Lahav',
    email: 'a@a.a',
    country: 'Israel',
    city: 'Tel aviv',
    rooms: '3',
    bathrooms: '2'
  }
];

function App() {
  const [data, setData] = useState(users);

  console.log(data); // this will log the retrieved data to the console
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn data={data} setData={setData} />} />
        <Route path="signup" element={<SignUp data={data} setData={setData} />} />
        <Route path="home" element={<Home data={data} setData={setData} />} />

      </Routes>
    </BrowserRouter >
  );
}

export default App;
