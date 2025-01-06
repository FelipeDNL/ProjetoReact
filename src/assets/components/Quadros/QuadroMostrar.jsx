import React, { useState } from 'react'
import './QuadroMostrar.css'
import BemVindo from '../BemVindo/BemVindo.jsx'

function QuadroMostrar({ opcaoSelecionada }) {

  return (
    <div className='quadro-mostrar'>

      <div className='local-div'>
        <div className='local'>
          C:/users/Felipe/{opcaoSelecionada}
        </div>
      </div>

      <div className='mostrar'>
        {opcaoSelecionada === 'bemVindo.html' && <BemVindo />}
        {opcaoSelecionada === 'sobre.html' && <div className='sobre'>Sobre</div>}
        {opcaoSelecionada === 'projetos' && <div className='projetos'>Projetos</div>}
      </div>
    </div>
  )
}

export default QuadroMostrar