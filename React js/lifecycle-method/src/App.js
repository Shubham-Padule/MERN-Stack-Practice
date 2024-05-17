// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Display from './Componets/Display';
import Home from './Componets/Home';
import Records from './Componets/Records';
import AddProduct from './Componets/AddProduct';
import RouteLinks from './Componets/RoutLink';
import SearchComponent from './Componets/SearchComponent'; // Import the SearchComponent

function App() {
  let [inFlag, setInFlag] = useState(false);

  function funInsert() {
    setInFlag(!inFlag);
  }

  return (
    <Router>
      <>
        <h3>React Product Application</h3>
        <input type="button" value="Insert" onClick={funInsert} />
        {inFlag && <AddProduct />}
        <RouteLinks />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allProducts" element={<Records />} />
          <Route path="/insertProduct" element={<AddProduct />} />
          <Route path="/getProducts/:limit/:skip" element={<Records />} />
          <Route path="/Search" element={<SearchComponent />} /> {/* Add the route for SearchComponent */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
