import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import Navigation from "./components/Navigation";
import { AuthContext } from "./context/auth";

function App(props) {
  return (
    <AuthContext.Provider value={false}>
      <Navigation />
    </AuthContext.Provider>
  );
}

export default App;

