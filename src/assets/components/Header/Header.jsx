import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-container'>
      <h1 className='titulo-header'>Felipe's Page
        <div className='quadrado'></div>
      </h1>
      <div className='opcoes-header'>
        <h3 className='op-header'>[Meu Curriculo]</h3>
        <Link to='/projetos' className='op-header'>[Projetos]</Link> 
        <Link to='https://github.com/FelipeDNL' className='op-header' target='_blank'>[GitHub]</Link>
      </div>
    </div>
  )
}

export default Header