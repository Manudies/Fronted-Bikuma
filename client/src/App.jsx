import { useState } from 'react'
import Hero from './components/hero/Hero'
import Cta from './components/cta/Cta'
import Noticias from './components/noticias/Noticias'
import Noticias2 from './components/noticias2/Noticias2'
import Servicios from './components/servicios/Servicios'
import Quienes from './components/quienes/Quienes'
import './App.css'

function App() {
  return (
    <>
      <div>
        <Hero />
        <Cta />
        <Noticias />
        <Servicios />
        <Quienes />
      </div>
    </>
  )
}

export default App
