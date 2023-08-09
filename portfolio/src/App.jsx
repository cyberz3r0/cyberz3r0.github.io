import { useState } from 'react'
import Nav from './components/Nav'
import SideProfile from './components/SideProfile'
import Summary from './components/Summary'
import './App.css'
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Summary />} path="/" />
          {/* <Route element={<Form />} path="/players/addplayer"/>  */}
          {/* <Route element={<PlayerStatus />} path="/status/game/:id"/>  */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
