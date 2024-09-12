import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";
import Show from "./Pages/ShowPassword/Show";
import Password from "./Pages/SavePassword/Password";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

const App = () => {
  const [savedata, setSaveData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("Data");
    if (storedData) {
      setSaveData(JSON.parse(storedData));
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Password savedata={savedata} setSaveData={setSaveData} />}
        />
        <Route
          path="/show"
          element={<Show savedata={savedata} setSaveData={setSaveData} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
