import { useState } from 'react'
import Hero from './components/hero/Hero'
import Cta from './components/cta/Cta'
import Noticias from './components/noticias/Noticias'
import Noticias2 from './components/noticias2/Noticias2'
import './App.css'

function App() {
  return (
    <>
      <div>
        <Hero />
        <Cta />
        {/* <Noticias /> */}
      </div>
    </>
  )
}

export default App
