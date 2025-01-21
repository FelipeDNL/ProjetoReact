import React, { useState } from 'react'
import './QuadroMostrar.css'

import BemVindo from '../Paginas/BemVindo/BemVindo.jsx'
import Sobre from '../Paginas/Sobre/Sobre.jsx'
import Projetos from '../Projetos/Projetos.jsx'
import ProjetosJava from '../Projetos/ProjetosJava.jsx'

function QuadroMostrar({ opcaoSelecionada, projetoSelecionado }) {

  const opcaoSelecionadaMap = {
    'bemVindo.html': <BemVindo />,
    'sobre.html': <Sobre />,
    'projetos': <Projetos projetoSelecionado={projetoSelecionado} />,
    'projetos/java': <ProjetosJava projetoSelecionado={projetoSelecionado} />,
  }

  //gambiarra pra concertar local-mostrar
  opcaoSelecionada === '' ? opcaoSelecionada = 'bemVindo.html' : opcaoSelecionada = opcaoSelecionada;

  projetoSelecionado === undefined ? projetoSelecionado = '' : projetoSelecionado = projetoSelecionado;
  
  return (
    <div className='quadro-mostrar'>

      <div className='local-div-mostrar'>
        <div className='local-mostrar'>
          {'>' + opcaoSelecionada + '/' + projetoSelecionado}
        </div>
      </div>

      <div className='mostrar'>
        {opcaoSelecionadaMap[opcaoSelecionada] || <BemVindo />}
      </div>
    </div>
  )
}

export default QuadroMostrar