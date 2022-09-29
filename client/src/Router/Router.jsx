import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from '../Pages/Homepage/Homepage.jsx'
import MapPage from '../Pages/MapPage/MapPage.jsx'
import PlotPage from '../Pages/PlotPage/PlotPage.jsx'
import StatsPage from '../Pages/StatsPage/StatsPage.jsx'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/plots" element={<PlotPage />} />
      <Route path="/stats" element={<StatsPage />} />
    </Routes>
  )
}

export default Router