import { useState } from 'react'
import Nav from './components/Nav'
import SideProfile from './components/SideProfile'
import Summary from './components/Summary'
import Revised from './components/Revised'
import './App.css'
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Summary />} path="/" />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
