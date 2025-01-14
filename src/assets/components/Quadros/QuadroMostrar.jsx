import React, { useState } from 'react'
import './QuadroMostrar.css'

import BemVindo from '../BemVindo/BemVindo.jsx'
import Sobre from '../Sobre/Sobre.jsx'
import Projetos from '../Projetos/Projetos.jsx'

function QuadroMostrar({ opcaoSelecionada }) {

  const opcaoMostrar = opcaoSelecionada || 'bemVindo.html';

  return (
    <div className='quadro-mostrar'>

      <div className='local-div-mostrar'>
        <div className='local-mostrar'>
          /users/Felipe/{opcaoMostrar}
        </div>
      </div>

      <div className='mostrar'>
        {opcaoMostrar === 'bemVindo.html' && <div className='bem-vindo'> <BemVindo /> </div>}
        {opcaoMostrar === 'sobre.html' && <div className='sobre'> <Sobre /> </div>}
        {opcaoMostrar === 'projetos' && <div className='projetos'> <Projetos /> </div>}
      </div>
    </div>
  )
}

export default QuadroMostrar