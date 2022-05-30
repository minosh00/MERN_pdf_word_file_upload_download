import {  useEffect, useState } from 'react';
import SongForm from './components/pdfFromat';
import React from 'react';
import Song from './components/Download';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

 function App() {
  return (

    <div >

<Router>
          <Routes>
            <Route extact path="/" element={<SongForm />} />
            <Route  path="/okok" element={<Song />} />
            </Routes>
            </Router>


         
    </div>

  );
}

export default App;