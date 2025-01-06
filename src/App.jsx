import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './assets/components/Header/Header.jsx'
import QuadroMostrar from './assets/components/Quadros/QuadroMostrar.jsx'
import QuadroOpcoes from './assets/components/Quadros/QuadroOpcoes.jsx'

function App() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('')

  return (
    <>
      <Header />
      <div className='container'>
        <QuadroOpcoes setOpcaoSelecionada={setOpcaoSelecionada} />
        <Routes>

          <Route
            path='/'
            element={
              <QuadroMostrar
                opcaoSelecionada={opcaoSelecionada}
              />
            }
          />

          <Route
            path='/projetos'
            element={
              <QuadroMostrar opcaoSelecionada='projetos'
              />
            }
          />
        </Routes>

      </div>
    </>
  )
}

export default App
