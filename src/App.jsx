import React from 'react'
import './App.css'
import MainLayout from './Layouts/MainLayout'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard1 from './Pages/Dashboard1'
import Dashboard2 from './Pages/Dashboard2'
import Configuration from './Pages/Configuration'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard1" replace />} />
          <Route path="dashboard1" element={<Dashboard1 />} />
          <Route path="configuration" element={<Configuration />} />
          <Route path="dashboard2" element={<Dashboard2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
