import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
      <h1 className='titulo-header'>Felipe's Page
        <div className='quadrado'></div>
      </h1>
      <div className='opcoes-header'>
        <h3 className='op-header'>[Meu Curriculo]</h3>
        <h3 className='op-header'>[Projetos]</h3>
        <h3 className='op-header'>[GitHub]</h3>
      </div>
    </div>
  )
}

export default Header