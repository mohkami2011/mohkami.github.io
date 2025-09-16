import React from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Collection from './pages/Collection.jsx'
import CollectionYear from './pages/CollectionYear.jsx'
import DressDetail from './pages/DressDetail.jsx'
import Appointment from './pages/Appointment.jsx'
import Success from './pages/Success.jsx'

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/collection/:year' element={<CollectionYear/>} />
        <Route path='/collection/:year/:code' element={<DressDetail/>} />
        <Route path='/appointment' element={<Appointment/>} />
        <Route path='/appointment/success' element={<Success/>} />
      </Routes>
    </Router>
  )
}
