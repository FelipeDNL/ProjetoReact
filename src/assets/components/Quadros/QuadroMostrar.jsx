import React, { useState } from 'react'
import './QuadroMostrar.css'

import BemVindo from '../BemVindo/BemVindo.jsx'
import Sobre from '../Sobre/Sobre.jsx'
import Projetos from '../Projetos/Projetos.jsx'
import ProjetosPython from '../Projetos/ProjetosPython.jsx'
import ProjetosJava from '../Projetos/ProjetosJava.jsx'

function QuadroMostrar({ opcaoSelecionada, projetoSelecionado }) {

  const opcaoSelecionadaMostrar = opcaoSelecionada || 'bemVindo.html';

  const opcaoSelecionadaMap = {
    'bemVindo.html': <BemVindo />,
    'sobre.html': <Sobre/>,
    'projetos': <Projetos projetoSelecionado={projetoSelecionado} />,
    'projetos/python': <ProjetosPython projetoSelecionado={projetoSelecionado} />,
    'projetos/java': <ProjetosJava projetoSelecionado={projetoSelecionado} />,
  }

  return (
    <div className='quadro-mostrar'>

      <div className='local-div-mostrar'>
        <div className='local-mostrar'>
          /users/Felipe/{projetoSelecionado} 
        </div>
      </div>

      <div className='mostrar'>
        {opcaoSelecionadaMap[opcaoSelecionada] || <BemVindo />}
      </div>
    </div>
  )
}

export default QuadroMostrar