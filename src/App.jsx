import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Welcome from "./pages/Welcome.jsx";
import Home from "./pages/Home.jsx";
import Mascotas from "./pages/Mascotas.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mascotas" element={<Mascotas />} /> {/* <-- Agrega esta línea */}
          <Route path="/mascotas/:id" element={<Mascotas />} />
        </Routes>
      </Router>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: "16px",
          },
        }}
      />
    </>
  );
}

export default App;