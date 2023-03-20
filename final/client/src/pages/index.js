import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/** importing our pages */
import Tracks from './tracks';
import Track from './track';
import Module from './module';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tracks />}/>
        <Route path="/track/:trackId" element={<Track />}/>
        <Route path="/track/:trackId/module/:moduleId" element={<Module />}/>
      </Routes>
    </BrowserRouter>
  );
}
