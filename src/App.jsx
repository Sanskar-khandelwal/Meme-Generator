import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Meme from "./component/Meme";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Meme />
      <Footer />
    </div>
  );
}

export default App;
