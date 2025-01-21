import React from 'react'

function Projetos({ projetoSelecionado }) {

  return (
    <div className='container-projetos'>
      <div className='opcoes-projetos'>
        {projetoSelecionado === 'projeto1' && (
          <div className='projeto1'>
            Projeto 1 selecionado
          </div>
        )}
        {projetoSelecionado === 'projeto2' && (
          <div className='projeto2'>
            Projeto 2 selecionado
          </div>
        )}
        {projetoSelecionado === 'projeto3' && (
          <div className='projeto3'>
            Projeto 3 selecionado
          </div>
        )}
      </div>
    </div>


  )
}

export default Projetos