import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import Navigation from "./components/Navigation";
import { AuthContext } from "./context/auth";

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
    <AuthContext.Provider value={false}>
      <Navigation />
    </AuthContext.Provider>
  );
}

export default App;

