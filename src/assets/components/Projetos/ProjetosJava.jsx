import React from 'react'

function ProjetosJava({ projetoSelecionado }) {
  return (
    <div className='container-projetos'>
      <div className='opcoes-projetos'>
        {projetoSelecionado === 'projetoJava1' && (
          <div className='projeto1'>
            Projeto Java 1 selecionado
          </div>
        )}
        {projetoSelecionado === 'projetoJava2' && (
          <div className='projeto2'>
            Projeto Java 2 selecionado
          </div>
        )}
        {projetoSelecionado === 'projetoJava3' && (
          <div className='projeto3'>
            Projeto Java 3 selecionado
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjetosJava