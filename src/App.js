import React from "react";
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import List from './components/Cardlist/List'

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