import React, { useState, createContext } from "react";
import Content from "./Content";
import Navbar from "./Navbar";

export const filterContext = createContext();

function App() {
  const [items, setItems] = useState([]);
  console.log(items);

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
