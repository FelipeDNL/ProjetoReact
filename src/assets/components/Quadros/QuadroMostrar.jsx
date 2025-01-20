import React, { useState } from 'react'
import './QuadroMostrar.css'

import BemVindo from '../Paginas/BemVindo/BemVindo.jsx'
import Sobre from '../Paginas/Sobre/Sobre.jsx'
import Projetos from '../Projetos/Projetos.jsx'
import ProjetosJava from '../Projetos/ProjetosJava.jsx'

function QuadroMostrar({ opcaoSelecionada, projetoSelecionado }) {

  const opcaoSelecionadaMap = {
    'bemVindo': <BemVindo />,
    'sobre': <Sobre/>,
    'projetos': <Projetos projetoSelecionado={projetoSelecionado} />,
    'projetos/java': <ProjetosJava projetoSelecionado={projetoSelecionado} />,
  }

  return (
    <div className='quadro-mostrar'>

      <div className='local-div-mostrar'>
        <div className='local-mostrar'>
          /users/Felipe/
        </div>
      </div>

      <div className='mostrar'>
        {opcaoSelecionadaMap[opcaoSelecionada]}
      </div>
    </div>
  )
}

export default QuadroMostrar