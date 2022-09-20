import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainRoute from './routes/MainRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainRoute />} />
        <Route path='/*' element={<Navigate replace to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
