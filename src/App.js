import React from "react";
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
// import Card from "./components/Card/Card";
import List from './components/Cardlist/List.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <List />
    </div>
  )
}

export default App;