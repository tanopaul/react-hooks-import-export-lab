import React from "react";
import Home from './Home.js';
import About from './About.js';
import NavBar from "./NavBar.js";
import {username, image, city} from '../data/user.js';

function App() {
  return (
    <div>
      <NavBar />
      <Home 
        name = {username}
        city = {city}
      />
      <About 
        image = {image}
      />
    </div>
  );
}

export default App;
