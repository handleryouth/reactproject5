import React, { useState } from "react";
import Content from "./Content";
import { filterContext } from "../contexts/filtercontext";
import Navbar from "./Navbar"

function App() {
  const [items, setItems] = useState([]);
  return (
    <div>
      <filterContext.Provider value={{ items, setItems }}>
        <Navbar />
        <Content />
      </filterContext.Provider>
    </div>
  );
}

export default App;
