import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {

  const [token, setToken] = useState(null);
  //Runs a code based a piece of some condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const token = hash.access_token;

    console.log("I have a token", token);
  }, []);

  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
